// GLOABAL's in the NODE----- no Window

// no window Objects because we do have browser in the NODE-JS

// __dirname : Gives the Current directory
// __filename  : Gives the current File Name
// require    : used to IMPORT Modules
// module    : info about current Module File
// process  : info about the env where program is being executed.

console.log("__dirname ==>", __dirname);
console.log("__filename ==>", __filename);
console.log("require ==>", require);
console.log("module ==>", module);
console.log("process ==>", process);

setTimeout(() => {
  console.log("Hello there setTime Out");
}, 1000);

setInterval(() => {
  console.log("Hello there");
}, 1000);
