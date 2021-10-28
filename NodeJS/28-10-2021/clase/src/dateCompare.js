const { DateTime } = require("luxon");

function dateCompare(fecha1,fecha2) {
    let primeraFecha = DateTime.fromISO(fecha1)
    let segundaFecha = DateTime.fromISO(fecha2);
    

    return primeraFecha | segundaFecha
  }
  module.exports = dateCompare;
  