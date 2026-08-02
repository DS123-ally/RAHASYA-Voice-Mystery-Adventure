const fs = require('fs');
let code = fs.readFileSync('C:/Rahasya/sadak-clone/lib/game/street-task-lessons/marathi.ts', 'utf8');

const split = code.split('"dadar-chowk-auto":');
const dadarPart = split[1];

let replacement = '"deccan-pune-auto":' + dadarPart
  .replace(/dadar-chowk-auto/g, 'deccan-pune-auto')
  .replace(/dadar-chowk-shop/g, 'deccan-pune-shop')
  .replace(/dadar-chowk-temple/g, 'deccan-pune-temple')
  .replace(/dadar-chowk-bus/g, 'deccan-pune-bus')
  .replace(/Dadar railway station/g, 'Pune railway station')
  .replace(/दादर/g, 'पुणे')
  .replace(/Vada pav/g, 'Misal pav')
  .replace(/vada pav/g, 'misal pav')
  .replace(/वडा/g, 'मिसळ')
  .replace(/Bandra/g, 'Swargate')
  .replace(/वांद्रे/g, 'स्वारगेट')
  .replace(/बांद्रा/g, 'स्वारगेट');

code = code.replace(/\};\s*$/, ',\n  ' + replacement + '\n};');
fs.writeFileSync('C:/Rahasya/sadak-clone/lib/game/street-task-lessons/marathi.ts', code);
console.log('Appended deccan-pune lessons to marathi.ts');
