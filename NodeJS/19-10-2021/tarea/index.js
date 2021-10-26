const { DateTime } = require("luxon");
const chalk = require("chalk");

let segundos = DateTime.now().toFormat("ss");

let tiempo = DateTime.now().toFormat("dd-MM-yyyy   HH:mm:ss");

if ((segundos === "00", segundos % 10 === 00)) {
  console.log(chalk.green(tiempo));
} else {
  console.log(tiempo);
}
