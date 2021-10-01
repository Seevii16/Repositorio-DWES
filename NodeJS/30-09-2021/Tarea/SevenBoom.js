const array = [1, 2, 3, 7];

array.forEach((element) => {
  if (element === 7) {
    resultado = "boom";
  } else {
    resultado = "no hay siete";
  }
});
console.log(resultado);
