 const child_process = require('node:child_process');
const { stdout, stderr } = require('node:process');
const { spawn,exec } = child_process;
const subProcess = spawn('ls', ["-1"]);
exec("ls -1", (err, stdout, stderr) => {
  console.log("----stdout---", stdout);
})
subProcess.stdout.on('data', data => {
  console.log(data.toString('utf-8'));
})