const http = require("http");

const server = http.createServer((req, res) => {
  const name = 'prop1=Antonio';
 // querystring.escape(str); //
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end(`<html><body><h1>Hello: ${name}</h1></body></html>`);
  })
  server.listen(3000);
