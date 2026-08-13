import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { SEED_TASK_PACKS } from "@/lib/game/tasks";

export const runtime = "nodejs";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const results = [];
  
  for (const pack of SEED_TASK_PACKS) {
    const { data, error } = await supabase
      .from("districts")
      .update({ task_pack: pack })
      .eq("id", pack.districtId);
    
    results.push({ id: pack.districtId, error });
  }

  return NextResponse.json({ results });
}
