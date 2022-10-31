//  Built in Module 2 ----> === FS Module ===
// ========== readFileSync    writeFileSync

const fs = require("fs");

console.log("FS===>", fs);

const first = fs.readFileSync("./Content/first.txt", "utf8");
const second = fs.readFileSync("./Content/second.txt", "utf8");

console.log("Read==>", first, second);

fs.writeFileSync(
  "./Content/result-sync.txt",
  `Here is the Final Result COPY : 

${first}

${second}
`
  // { flag: "a" }
);
