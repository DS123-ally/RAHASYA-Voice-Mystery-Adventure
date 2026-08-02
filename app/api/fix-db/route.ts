import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { SEED_TASK_PACKS } from "@/lib/game/tasks";

export const runtime = "nodejs";

export async function GET() {
  const supabase = await createClient();
  const pack = SEED_TASK_PACKS.find(p => p.districtId === "majestic-cross");
  
  if (!pack) {
    return NextResponse.json({ error: "No majestic-cross pack found" }, { status: 404 });
  }

  const { data, error } = await supabase
    .from("districts")
    .update({ task_pack: pack })
    .eq("id", "majestic-cross");

  return NextResponse.json({ data, error });
}
