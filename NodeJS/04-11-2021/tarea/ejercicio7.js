const http = require("http");
var url = require("url");

/*function fizzBuzz(n) {
  let result = "";
  if (n % 3 === 0) result += "fizz";
  if (n % 5 === 0) result += "buzz";

  return result || n;
} */
const server = http.createServer((req, res) => {
  let number = url.parse(req.url, true).query;

  res.setHeader("Content-Type", "text/plane");
    for (let i = 0; i < number.number; i++) {
        res.end(i)
        
    }
 // res.end("");
});
server.listen(3000);
