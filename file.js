//const fs = require("fs/promises");
// promise api
// (async () => {
//   try {
//     await fs.copyFile('command.txt', "copied-promise.txt");
//   } catch (error) {
//     console.log("error", error);
//   }
// })()
// callback api
//import { copyFile, constants } from 'node:fs';
const  fs  = require('fs');
fs.copyFile('command.txt', "copied-callback.txt", (error) => {
  console.log("error",error)
})