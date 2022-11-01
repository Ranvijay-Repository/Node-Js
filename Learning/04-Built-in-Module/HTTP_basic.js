//  Built in Module 4 ----> === HTTP ===

const http = require("http");
console.log("http===>", http);

const server = http.createServer((req, res) => {
  res.write("Welcome to Home Page");
  res.end();
});

server.listen(3000);
