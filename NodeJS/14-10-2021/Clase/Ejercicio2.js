const fs = require("fs");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve");
    }, ms);
  });
}

function read() {
  try {
    const data = fs.readFileSync(`./Ejemplo.txt`, "utf-8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function leer() {
  fs.readFile("./Ejemplo2.txt","utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
async function start(){

    read();
    console.log('Perate 5 segunditos que viene el tussan killo.');
    await sleep(5000);
    leer();
}
start();