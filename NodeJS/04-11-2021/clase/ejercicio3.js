const http = require("http");

const server =http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
      case "/page":
        res.writeHead(200);
        res.end('<html><body><h1>Bienvenido a la Pagina Principal :D</h1></body></html>');
        break;
        default:
            res.writeHead(404);
            res.end('<html><body><h1>Error 404</h1><h2>Not Found</h2></body></html>');
    }
  })
  server.listen(3000);
