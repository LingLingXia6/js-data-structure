const { open } = require('node:fs/promises');
const process = require('process');
console.log("pid",process.pid);
// (async () => {
//   try {
//     console.time('bunch-of-stuff');
//     const fileHandle = await open('./command.txt','w');
//     for (let i = 0; i < 1000000; i++) {
//       await fileHandle.writeFile(`${i}: i`);
//     }
//     fileHandle.on('close', () => {
//       console.log("----close---");
//     })
//     console.timeEnd('bunch-of-stuff');
//     setTimeout(() => { }, 3000);
//   }catch (error) {
//     console.log("error--", error);
//   }
  
// })();
(async () => {
  
  console.time("use-time")
  try {
    const fileHandle = await open('./command.txt','w');
   
    // stream.write return true表明可以写数据，false表明不可写数据
    const stream = fileHandle.createWriteStream();
    // let onDrainNumber = 0;
    // for (let i = 0; i < 100000; i++) {
     
    //   const buff = Buffer.from(` ${i.toString()} `)
    //   console.log("stream can write", stream.write(buff), 'index', i);
    //   if (stream.write(buff)) {
        
    //   } 

    // }
    // stream.on('drain', () => {
    //   if (stream.write(buff)) {
    //     w
    //   }
     
    //   onDrainNumber = onDrainNumber++;
    // }) 
    // console.log("onDrainNumber",onDrainNumber);
    // fileHandle.on('close', () => {
    //   console.log("----close---");
    // })
    
    let i = 0;
    let ok = true;
    //
    
    // const write = () => {
    //   console.log("write");
    //   while (i < 100000) {
    //     let buff = Buffer.from(` ${i.toString()} `);
    //     ok = stream.write(buff);
    //     if (ok) {
         
    //       i++;
    //     } else break;
        
        
    //   }
    // }
    const write = () => {
      for (i; i < 100000; i++){
        let buff = Buffer.from(` ${i.toString()} `);
        ok = stream.write(buff);
        if (!ok) break;
      }
    }
    write();
    console.log("ii", i);
    stream.on('drain', () => {
      console.log("drain write state", stream.write("22"));
      
      write();
      
    });
    stream.on('data',(chunk)=> {
      console.log("chunk", chunk);
    })
    
  }catch (error) {
    console.log("error--", error);
  }
  console.timeEnd("use-time")
  
})();
