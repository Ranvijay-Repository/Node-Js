//  Built in Module 4 ----> === HTTP ===

const http = require("http");
console.log("http===>", http);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This the The Home Page");
    return;
  }
  if (req.url === "/about") {
    res.end("This the The About Page");
    return;
  }
  res.end(`
  <h1>Oops !</h1>
  <h3>Page Not Found</h3>
  <a href="/">back to HOME </a>
  `);
});

server.listen(3000);
