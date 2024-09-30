const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

function c1 () {
  setTimeout(() => { console.log("c1 settimeoute")}, 2000);
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}
function once () {
  console.log('once')
}
// console.log("myEmitter", myEmitter);
myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne
myEmitter.once('eventOne',once);
// myEmitter.emit("eventOnce");
myEmitter.emit("eventOne");
console.log("---------");
myEmitter.emit("eventOne");
// 回调函数调用，
// insertemilUser（） event.on('addTicketEvent',emilUser（）)