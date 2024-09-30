const { dir } = require('console');
const net = require('net');
// const util = require('node:util');

const readline = require('node:readline');

// const question = util.promisify(readline.question).bind(readline);
//
// 创建 readline.Interface 实例
const rl = readline.createInterface({
  input: process.stdin, // 标准输入作为数据源
  output: process.stdout, // 标准输出
});

// rl.question("你叫什么名字？", (name) => {
//   console.log(`欢迎 ${name}!`);

//   // 不要忘了关闭 Interface 实例！
//   rl.close();
// });
// const message = rl.question("please input your question", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   console.log("message:",message)
//   rl.close();
// });
const ask = async () => {
  await rl.question("输入你的问题 > ",  async (message) => {
    console.log("message", message);
  await  moveCursor(0, -1);
   // 清除光标当前所在的行
   await clearLine(0);
   socket.write(message);
});
}
ask();
const socket = net.createConnection({ host: '127.0.0.1', port: 3008 },
  async () => {
    await  moveCursor(0, -1);
    // 清除光标当前所在的行
    await clearLine(0);
     ask();
    
   
  });
const moveCursor = (dx,dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx,dy, () => {
      resolve()
    })
  })
}
const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve()
    })
  })
  
  }
socket.on('data', async(data) => {
  await moveCursor(0, -1);
  await clearLine(0);
  
  console.log(data.toString());
  ask();
  })

  socket.on('end', () => {
    console.log("连接结束了")
  })
  socket.on('error', (error) => {
    console.log("连接失败", error);
    })
  
  
