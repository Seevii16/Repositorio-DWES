const fs = require("fs");
function crear() {
    //console.log(process.argv);
     try {
       fs.appendFileSync(`./files/${process.argv[2]}.json`,"utf-8");
       console.log('Archivo Creado');
     } catch (error) {
       console.error(error);
     }
   }
   crear()