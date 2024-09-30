const { Buffer } = require('buffer');
// const memoryContainer = Buffer.alloc(3);//4byte;
// memoryContainer[0] = 0x48;
// memoryContainer[1] = 0x69;
// memoryContainer[2] = 0x21;
memoryContainer=Buffer.from("hello")
console.log(memoryContainer);