const fs = require("fs");

function read() {
 //console.log(process.argv);
  try {
    const data = fs.readFileSync(`./${process.argv[2]}`,"utf-8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
read()