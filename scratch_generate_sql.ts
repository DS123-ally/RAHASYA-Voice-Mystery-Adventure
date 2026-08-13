
import { SEED_TASK_PACKS } from "./lib/game/tasks";
import { SIX_SEED_TASK_PACKS } from "./lib/game/tasks-six";
import { SEED_DISTRICTS } from "./lib/game/districts";
import { SIX_SEED_DISTRICTS } from "./lib/game/districts-six";
import * as fs from "fs";

const allTasks = [...SEED_TASK_PACKS, ...SIX_SEED_TASK_PACKS];
const allDistricts = [...SEED_DISTRICTS, ...SIX_SEED_DISTRICTS];
let sql = "-- Migration to add Local Guide to all districts\n\n";

for (const pack of allTasks) {
  const districtObj = allDistricts.find(d => d.id === pack.districtId);
  if (!districtObj) continue;
  
  const taskPackJson = JSON.stringify(pack).replace(/'/g, "''");
  const districtJson = JSON.stringify(districtObj).replace(/'/g, "''");
  
  sql += `UPDATE districts SET 
  task_pack = '${taskPackJson}'::jsonb,
  district = '${districtJson}'::jsonb
WHERE id = '${pack.districtId}';\n\n`;
}

fs.writeFileSync("supabase/migrations/012_add_local_guides.sql", sql);
console.log("Generated 012_add_local_guides.sql");
