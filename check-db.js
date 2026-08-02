const fs = require('fs');
const envStr = fs.existsSync('.env.local') ? fs.readFileSync('.env.local', 'utf8') : fs.readFileSync('.env', 'utf8');
const env = envStr.split('\n').reduce((acc, line) => {
  const [key, ...val] = line.split('=');
  if (key) acc[key.trim()] = val.join('=').trim().replace(/"/g, '').replace(/'/g, '');
  return acc;
}, {});
async function check() {
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
  const { data, error } = await supabase.from('districts').select('task_pack').eq('id', 'majestic-cross').single();
  if (error) { console.error(error); return; }
  const tasks = data.task_pack.tasks;
  const shop = tasks.find(t => t.id === 'majestic-cross-shop');
  console.log("Medium:");
  console.log(JSON.stringify(shop.lessons.medium, null, 2));
  console.log("Easy:");
  console.log(JSON.stringify(shop.lessons.easy, null, 2));
}
check();
