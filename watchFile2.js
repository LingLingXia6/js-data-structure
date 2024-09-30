// const { watch } = require("node:fs/promises");
// const ac = new AbortController();
// const { signal } = ac;
// setTimeout(() => { ac.abort() }, 20000);
// (
//   async () => {
//     try { 
//       const watcherInterator = watch('command.txt', { signal });
//        for await (let i of watcherInterator) {
//          console.log("interator", i);
//       }
//     } catch (err) {
      
//     }
//   }
// )()
// import { watch } from 'node:fs';
// const { watch } = require('node:fs')
// const ac = new AbortController();
// const { signal } = ac;
// setTimeout(() => {
//   ac.abort();
// },20000)
// watch("command.txt", { signal }, (eventType,fileName) => {
//   console.log("fileName", eventType, fileName);
// })
const {
  open,
} = require('node:fs/promises');
(async () => {
  const fileHandle = await open('command.txt');
  const { size } = await fileHandle.stat();
  const buffer = Buffer.alloc(size);
  const byteSize = buffer.byteLength;
  const contents = await fileHandle.read(buffer, 0, byteSize, null);
  console.log("contents----", contents);
  console.log("buffer",buffer);
})()
