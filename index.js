const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {"Content-Type": "text/plain"});
    return res.end("OK");
  }
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello CI/CD World!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
