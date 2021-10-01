const array = [5,5];

const sumar = (numAnterior, numPosterior) => numAnterior + numPosterior;

if (array.reduce(sumar) % 2) {
  console.log("Oddish"); // Oddish si es Impar
} else {
  console.log("Evenish"); // Evenish si es Par
}

