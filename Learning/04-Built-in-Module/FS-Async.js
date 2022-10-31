//  Built in Module 2 ----> === FS Module ===
// ========== readFileSync    writeFileSync

const fs = require("fs");
console.log("FS===>", fs);

fs.readFile("./Content/first.txt", "utf8", (err, succ) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = succ;
    fs.readFile("./Content/second.txt", "utf8", (err, succ) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = succ;
        fs.writeFile(
          "./Content/result-async.txt",
          `Here is the Final Result Async Copyy : 
${first}
${second}`,
          (err, succ) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log(succ);
            }
          }
        );
      }
    });
  }
});
