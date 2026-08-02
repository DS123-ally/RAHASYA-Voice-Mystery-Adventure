import { createClient } from "@/lib/supabase/server";
import { SEED_DISTRICTS, type District } from "@/lib/game/districts";
import { SEED_TASK_PACKS, type DistrictTaskPack, type StreetTask } from "@/lib/game/tasks";

export type LoadedDistrict = {
  id: string;
  district: District;
  taskPack: DistrictTaskPack;
  tasks: StreetTask[];
};

type DistrictRow = {
  id: string;
  district: District;
  task_pack: DistrictTaskPack;
};

const CACHE_TTL_MS = 60_000;

const cache = new Map<string, { at: number; value: LoadedDistrict }>();
let listCache: { at: number; value: DistrictListItem[] } | null = null;

export type DistrictListItem = {
  id: string;
  name: string;
  city: string;
  blurb: string;
  language: string;
  languageLabel: string;
  native: string;
  coverImage: string;
  taskCount: number;
};

function rowToLoaded(row: DistrictRow): LoadedDistrict {
  const taskPack = row.task_pack;
  
  // Patch tasks if DB is missing prompts (legacy interruption format)
  const localPack = SEED_TASK_PACKS.find(p => p.districtId === row.id);
  const tasks = (taskPack.tasks ?? []).map(task => {
    if (!localPack) return task;
    const localTask = localPack.tasks.find(t => t.id === task.id);
    if (!localTask) return task;
    return { ...task, lessons: localTask.lessons };
  });

  return {
    id: row.id,
    district: row.district,
    taskPack: { ...taskPack, tasks },
    tasks,
  };
}

function isFresh(at: number): boolean {
  return Date.now() - at < CACHE_TTL_MS;
}

export async function loadDistrictById(
  id: string,
): Promise<LoadedDistrict | null> {
  const hit = cache.get(id);
  if (hit && isFresh(hit.at)) {
    return hit.value;
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("districts")
    .select("id, district, task_pack")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("loadDistrictById", id, error);
    throw new Error("Failed to load district.");
  }
  
  let row = data as DistrictRow | null;
  if (!row) {
    const localDistrict = SEED_DISTRICTS.find(d => d.id === id);
    const localPack = SEED_TASK_PACKS.find(p => p.districtId === id);
    if (localDistrict && localPack) {
      row = {
        id,
        district: localDistrict,
        task_pack: localPack
      };
    } else {
      return null;
    }
  }

  const loaded = rowToLoaded(row);
  cache.set(id, { at: Date.now(), value: loaded });
  return loaded;
}

export async function listDistricts(): Promise<DistrictListItem[]> {
  if (listCache && isFresh(listCache.at)) {
    return listCache.value;
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("districts")
    .select("id, district, task_pack")
    .order("id");

  if (error) {
    console.error("listDistricts", error);
    throw new Error("Failed to list districts.");
  }
  
  const mergedRows = new Map<string, DistrictRow>();
  for (const row of data ?? []) {
    mergedRows.set(row.id, row as DistrictRow);
  }
  
  // Merge un-pushed local seeds
  for (const sd of SEED_DISTRICTS) {
    if (!mergedRows.has(sd.id)) {
      const sp = SEED_TASK_PACKS.find(p => p.districtId === sd.id);
      if (sp) {
        mergedRows.set(sd.id, {
          id: sd.id,
          district: sd,
          task_pack: sp
        });
      }
    }
  }

  const items = Array.from(mergedRows.values()).map((row) => {
    const district = row.district;
    const pack = row.task_pack;
    return {
      id: row.id,
      name: district.name,
      city: district.city,
      blurb: district.blurb,
      language: district.language,
      languageLabel: district.languageLabel,
      native: district.native,
      coverImage: district.coverImage,
      taskCount: pack.tasks?.length ?? 0,
    };
  });
  
  // Sort by id for consistency
  items.sort((a, b) => a.id.localeCompare(b.id));

  listCache = { at: Date.now(), value: items };
  for (const row of mergedRows.values()) {
    const loaded = rowToLoaded(row);
    cache.set(loaded.id, { at: Date.now(), value: loaded });
  }

  return items;
}

export function findTaskInLoaded(
  loaded: LoadedDistrict,
  taskId: string,
): StreetTask | undefined {
  return loaded.tasks.find((t) => t.id === taskId);
}
