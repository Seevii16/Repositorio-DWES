const http = require("http");
var url = require('url');

const server = http.createServer((req, res) => {
    let name = url.parse(req.url, true).query;

    res.setHeader('Content-Type', 'text/html');

    res.end(`<html><body><h1>Hello: ${name.name}</h1></body></html>`);
    
  })
  server.listen(3000);
