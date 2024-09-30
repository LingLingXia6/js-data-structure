// __dirname返回当前文件所在的绝对路径
const path = require('path');
// 组合成当前目录下的文件夹路径
// __dirname返回/Users/xialingling/study/node-project
// /Users/xialingling/study/node-project/foo 

const path1 = path.join(__dirname, '/path.js');
//path.resolve:是将相对路径转为绝对路径
const absolutePath = path.resolve('foo/bar');
// 思路类似于: cd foo/bar ,cd /tmp/file/,cd .., cd ,a/../subfile
const baseName = path.basename(__filename);
const filePath = path.join(__dirname, baseName);
console.log('filePath',filePath);
console.log('path1', path1,);
console.log('__filename', __filename);


const readfilePath = path.join(__dirname, '/file.js');
const file = require('fs/promises');
(async() => {
  const content = await file.readFile(readfilePath);
  console.log('content',content.toString());
})()
//console.log('absolutePath', absolutePath);
// console.log('path3',path33);