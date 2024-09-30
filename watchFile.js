const { watch } = require('node:fs/promises');
const fs = require('node:fs/promises');
const { readFile } = require('node:fs/promises');
//const ac = new AbortController();
//const { signal } = ac;
//setTimeout(() => ac.abort(), 10000);

// (async () => {
//   try {
//     const watcher = watch("command.txt", { signal });
//     const content = await readFile("command.txt");
      
//     for await (const event of watcher) {
//       console.log('event', event);
//       console.log("contents", content);
      
//     }
     
//   } catch (err) {
//     if (err.name === 'AbortError')
//       return;
//     throw err;
//   }
// })();

(async () => {
  const fsHandle =  await fs.open('command.txt');
  const contents = await fsHandle.read();
  const stat = await fsHandle.stat();
  console.log("contents", contents);
  console.log('stat',stat);
})()