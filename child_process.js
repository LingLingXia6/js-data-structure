const { spawn } = require('node:child_process');
const process = require('node:process');
// spaw return childProcess
const ls = spawn('pwd');
console.log('process pid', process.pid);
console.log("env", process.env);
console.log('subProcess pid', ls.pid);
console.log("subprocess env ", ls.env);
// childProcess 代表的是 Readable Stream
ls.stdout.on('data', (data) => {
  console.log('data', data,data.toString('utf-8'));
})