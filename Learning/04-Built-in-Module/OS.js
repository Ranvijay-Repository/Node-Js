//  Built in Module ----> === OS ===

const os = require("os");

console.log("OS==>", os);

// userInfo is about the Current User
const user = os.userInfo();
console.log("user", user);

// method to SHOW the System up-Time
console.log(`Stystem Up-time is ${os.uptime()} seconds`);

//  get the System info.
const currentInfo = {
  name: os.type(),
  relese: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
  platform: os.platform(),
  arch: os.arch(),
  cpus: os.cpus(),
  homedir: os.homedir(),
  hostname: os.hostname(),
  // machine: os.machine(),
  networkInterfaces: os.networkInterfaces(),
  version: os.version(),
};

console.log("currentInfo==>", currentInfo);
