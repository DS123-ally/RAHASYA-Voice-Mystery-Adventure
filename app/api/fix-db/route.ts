import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { SEED_TASK_PACKS } from "@/lib/game/tasks";
import { SIX_SEED_TASK_PACKS } from "@/lib/game/tasks-six";
import { SEED_DISTRICTS } from "@/lib/game/districts";
import { SIX_SEED_DISTRICTS } from "@/lib/game/districts-six";

export const runtime = "nodejs";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const results = [];
  
  const allTasks = [...SEED_TASK_PACKS, ...SIX_SEED_TASK_PACKS];
  const allDistricts = [...SEED_DISTRICTS, ...SIX_SEED_DISTRICTS];
  
  for (const pack of allTasks) {
    const districtObj = allDistricts.find(d => d.id === pack.districtId);
    if (!districtObj) continue;
    
    const { data, error } = await supabase
      .from("districts")
      .update({ task_pack: pack, district: districtObj })
      .eq("id", pack.districtId);
    
    results.push({ id: pack.districtId, error });
  }

  return NextResponse.json({ results });
}
