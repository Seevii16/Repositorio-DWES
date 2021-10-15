const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require("fs");

console.log("1.Crear nota");
console.log("2.Editar nota");
console.log("3.Eliminar nota");

rl.question("Elige una opcion:  ", function (opcion) {
  switch (opcion) {
    case "1":
      console.log("1.Crear Nota");
      rl.question("Introduce nombre para la nota:  ", function (nombre) {
        rl.question(
          "Introduce contenido para la nota:  ",
          function (contenido) {
            fs.appendFileSync(`./${nombre}.note`, contenido);
            rl.close();
          }
        );
      });
      break;

    case "2":
      console.log("2.Editar nota");
      fs.readdir("./", function (err, archivos) {
        if (err) {
          onError(err);
          return;
        }
        console.log(archivos);
      });
      rl.question(
        "Introduce nombre de la nota que quieras modificar:  ",
        function (nombreEditar) {
          rl.question(
            "Introduce contenido de la nota que quieras modificar:  ",
            function (contenidoEditar) {
              fs.writeFileSync(`./${nombreEditar}.note`, contenidoEditar);
              rl.close();
            }
          );
        }
      );
      break;

    case "3":
      console.log("2.Borrar nota");
      fs.readdir("./", function (err, archivos) {
        if (err) {
          onError(err);
          return;
        }
        console.log(archivos);
      });
      rl.question(
        "Introduce nombre de la nota que quieras borrar:  ",
        function (nombreBorrar) {
          fs.unlinkSync(`./${nombreBorrar}`);
          rl.close();
        }
      );
      break;

    default:
      break;
  }
});
