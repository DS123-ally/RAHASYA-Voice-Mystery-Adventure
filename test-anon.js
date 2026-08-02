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
  
  // Try to read majestic-cross to see if anon can read it without cookies
  const { data, error } = await supabase.from('districts').select('id').eq('id', 'majestic-cross');
  console.log('Read test:', error || data);
}
check();
