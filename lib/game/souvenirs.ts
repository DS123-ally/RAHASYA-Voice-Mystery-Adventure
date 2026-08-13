import type { StreetTask, TaskKind } from "@/lib/game/tasks";

export type Souvenir = {
  id: string;
  taskId: string;
  districtId: string;
  kind: TaskKind;
  icon: string;
  name: string;
  description: string;
};

const STORAGE_KEY = "rahasya.souvenirs.v1";

const SOUVENIR_OVERRIDES: Record<string, Pick<Souvenir, "icon" | "name" | "description">> = {
  "purani-sadak-auto": {
    icon: "🛺",
    name: "Delhi Auto Fare Slip",
    description: "A hard-won ride to New Delhi station.",
  },
  "purani-sadak-shop": {
    icon: "🥟",
    name: "Kachori Packet",
    description: "Crisp Old Delhi kachoris wrapped for the road.",
  },
  "purani-sadak-temple": {
    icon: "🌼",
    name: "Mandir Marigold Garland",
    description: "Temple flowers ready for darshan.",
  },
  "purani-sadak-bus": {
    icon: "🎟️",
    name: "Chandni Chowk Bus Ticket",
    description: "A punched city ticket from the old street.",
  },
  "marina-nagar-auto": {
    icon: "🛺",
    name: "Share Auto Token",
    description: "Proof you negotiated the T Nagar share ride.",
  },
  "marina-nagar-shop": {
    icon: "🥞",
    name: "Masala Dosa Plate",
    description: "Crisp dosa and filter coffee from Chennai.",
  },
  "marina-nagar-temple": {
    icon: "🥥",
    name: "Temple Coconut",
    description: "A coconut and kumkum for archana.",
  },
  "marina-nagar-bus": {
    icon: "🎟️",
    name: "Marina Beach Ticket",
    description: "A city bus ticket toward the sea breeze.",
  },
  "majestic-cross-auto": {
    icon: "🛺",
    name: "Majestic Auto Receipt",
    description: "Fare settled for the Bengaluru bus stand.",
  },
  "majestic-cross-shop": {
    icon: "🍽️",
    name: "Idli-Vada Leaf Plate",
    description: "A Bengaluru tiffin breakfast souvenir.",
  },
  "majestic-cross-temple": {
    icon: "🌸",
    name: "Mallige Garland",
    description: "Fragrant jasmine from the temple entrance.",
  },
  "majestic-cross-bus": {
    icon: "🎟️",
    name: "BMTC Ticket",
    description: "A green bus ticket to Shivajinagar.",
  },
  "park-gully-auto": {
    icon: "🚕",
    name: "Howrah Ride Chit",
    description: "A Kolkata ride note for Howrah station.",
  },
  "park-gully-shop": {
    icon: "🥟",
    name: "Singara-Kachori Cone",
    description: "A para snack cone with cha memories.",
  },
  "park-gully-temple": {
    icon: "🙏",
    name: "Kali Mandir Prasad",
    description: "A small prasad packet from the temple gate.",
  },
  "park-gully-bus": {
    icon: "🎟️",
    name: "Esplanade Tram Ticket",
    description: "A tram ticket from Kolkata's old rails.",
  },
  "charminar-lane-auto": {
    icon: "🛺",
    name: "Secunderabad Auto Token",
    description: "A Hyderabad auto ride negotiated in Telugu.",
  },
  "charminar-lane-shop": {
    icon: "🌶️",
    name: "Mirchi Bajji Packet",
    description: "A spicy old-city snack from Charminar Lane.",
  },
  "charminar-lane-temple": {
    icon: "🌼",
    name: "Charminar Flower Garland",
    description: "Marigolds bought near the monument.",
  },
  "charminar-lane-bus": {
    icon: "🎟️",
    name: "Golconda Bus Ticket",
    description: "A ticket to the fort road.",
  },
  "fort-kochi-auto": {
    icon: "🛺",
    name: "Ernakulam Auto Fare",
    description: "A waterfront ride fare settled in Malayalam.",
  },
  "fort-kochi-shop": {
    icon: "🥥",
    name: "Puttu Breakfast Parcel",
    description: "Steamed puttu and chai from Fort Kochi.",
  },
  "fort-kochi-temple": {
    icon: "💐",
    name: "Church Flower Bundle",
    description: "Flowers bought before the bell.",
  },
  "fort-kochi-bus": {
    icon: "🎟️",
    name: "Fort Kochi Bus Ticket",
    description: "A backwater city bus keepsake.",
  },
  "dadar-chowk-auto": {
    icon: "🛺",
    name: "Dadar Auto Fare Slip",
    description: "A station ride settled in Marathi.",
  },
  "dadar-chowk-shop": {
    icon: "🍔",
    name: "Vada Pav Wrapper",
    description: "A classic Mumbai snack wrapper.",
  },
  "dadar-chowk-temple": {
    icon: "🌼",
    name: "Siddhivinayak Garland",
    description: "Marigolds bought before the temple bell.",
  },
  "dadar-chowk-bus": {
    icon: "🎟️",
    name: "BEST Bus Ticket",
    description: "A red-bus ticket to Bandra.",
  },
  "manek-chowk-auto": {
    icon: "🛺",
    name: "Kalupur Auto Token",
    description: "An Ahmedabad station fare won by bargaining.",
  },
  "manek-chowk-shop": {
    icon: "🍯",
    name: "Fafda-Jalebi Plate",
    description: "A sweet-salty Manek Chowk breakfast.",
  },
  "manek-chowk-temple": {
    icon: "🌼",
    name: "Temple Mala",
    description: "A garland for darshan in Gujarati.",
  },
  "manek-chowk-bus": {
    icon: "🎟️",
    name: "Law Garden Bus Ticket",
    description: "A city ticket toward the evening market.",
  },
  "hall-bazaar-auto": {
    icon: "🛺",
    name: "Harmandir Sahib Auto Token",
    description: "A ride toward the Golden Temple.",
  },
  "hall-bazaar-shop": {
    icon: "🥛",
    name: "Amritsari Lassi Glass",
    description: "A sweet lassi memory from Hall Bazaar.",
  },
  "hall-bazaar-temple": {
    icon: "🥣",
    name: "Karah Prasad Bowl",
    description: "Warm prasad before joining the queue.",
  },
  "hall-bazaar-bus": {
    icon: "🎟️",
    name: "Hall Bazaar Bus Ticket",
    description: "A Punjabi city ride keepsake.",
  },
  "lingaraj-lane-auto": {
    icon: "🛺",
    name: "Master Canteen Auto Token",
    description: "An Odia auto ride fare settled politely.",
  },
  "lingaraj-lane-shop": {
    icon: "🍚",
    name: "Pakhala Plate",
    description: "A cooling Odia lunch with badi chutney.",
  },
  "lingaraj-lane-temple": {
    icon: "🌼",
    name: "Lingaraj Marigold Mala",
    description: "Temple flowers before arati.",
  },
  "lingaraj-lane-bus": {
    icon: "🎟️",
    name: "KIIT Square Bus Ticket",
    description: "A Bhubaneswar city bus ticket.",
  },
  "deccan-pune-auto": {
    icon: "🛺",
    name: "Pune Station Auto Slip",
    description: "A negotiated ride through Deccan traffic.",
  },
  "deccan-pune-shop": {
    icon: "🌶️",
    name: "Misal Pav Bowl",
    description: "A spicy Pune misal memory.",
  },
  "deccan-pune-temple": {
    icon: "🙏",
    name: "Dagdusheth Prasad",
    description: "Prasad from a Pune temple visit.",
  },
  "deccan-pune-bus": {
    icon: "🎟️",
    name: "Swargate Bus Ticket",
    description: "A PMPML ticket toward Swargate.",
  },
};

const FALLBACK_BY_KIND: Record<TaskKind, Pick<Souvenir, "icon" | "name" | "description">> = {
  auto: {
    icon: "🛺",
    name: "Auto Fare Slip",
    description: "A fare settled in the local language.",
  },
  shop: {
    icon: "🛍️",
    name: "Street Snack",
    description: "A local bite ordered at a city stall.",
  },
  temple: {
    icon: "🌼",
    name: "Temple Offering",
    description: "Flowers or prasad bought near a sacred stop.",
  },
  bus: {
    icon: "🎟️",
    name: "City Ticket",
    description: "A ticket earned by navigating local transit.",
  },
};

export const ALL_SOUVENIRS: Souvenir[] = Object.entries(SOUVENIR_OVERRIDES).map(
  ([taskId, item]) => {
    const districtId = taskId.split("-").slice(0, -1).join("-");
    const kind = taskId.split("-").at(-1) as TaskKind;
    return {
      id: taskId,
      taskId,
      districtId,
      kind,
      ...item,
    };
  },
);

export function souvenirForTask(task: StreetTask): Souvenir {
  const item = SOUVENIR_OVERRIDES[task.id] ?? FALLBACK_BY_KIND[task.kind];
  return {
    id: task.id,
    taskId: task.id,
    districtId: task.districtId,
    kind: task.kind,
    ...item,
  };
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function readCollectedSouvenirIds(): string[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is string => typeof id === "string");
  } catch {
    return [];
  }
}

export function writeCollectedSouvenirIds(ids: string[]): void {
  if (!canUseStorage()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(ids)]));
}

export function addCollectedSouvenir(souvenir: Souvenir): boolean {
  const ids = readCollectedSouvenirIds();
  if (ids.includes(souvenir.id)) return false;
  writeCollectedSouvenirIds([...ids, souvenir.id]);
  return true;
}

export function readCollectedSouvenirs(): Souvenir[] {
  const ids = new Set(readCollectedSouvenirIds());
  return ALL_SOUVENIRS.filter((s) => ids.has(s.id));
}
