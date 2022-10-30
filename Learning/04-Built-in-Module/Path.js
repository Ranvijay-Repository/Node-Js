//  Built in Module 2 ----> === PATH Module ===

const path = require("path");

console.log("PATH==>", path);

const filePath = path.join("Content", "subfolder", "text.txt");
console.log("File Path==>", filePath);

const base = path.basename(filePath);
console.log("base==>", base);

const absolute = path.resolve(__dirname, "Content", "subfolder", "text.txt");
console.log("absolute==>", absolute);
