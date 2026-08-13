
import { SEED_TASK_PACKS } from "./lib/game/tasks";
import * as fs from "fs";

let sql = "-- Add Coffee Shops to all cities\n\n";
for (const pack of SEED_TASK_PACKS) {
  const jsonStr = JSON.stringify(pack).replace(/'/g, "''");
  sql += `UPDATE public.districts SET task_pack = '${jsonStr}'::jsonb WHERE id = '${pack.districtId}';\n\n`;
}
fs.writeFileSync("./supabase/migrations/011_add_coffee_shops.sql", sql);
console.log("Generated 011_add_coffee_shops.sql");
