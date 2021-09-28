a1 = [10,9,8,7,6,5,4];
let creciente = true;
let decreciente = true;

for (let i = 0; i < a1.length - 1; i++) {
  if (a1[1] > a1[i + 1]) {
    creciente = false;
  } else if (a1[1] < a1[i + 1]) {
    decreciente = false;
  }
}
if (creciente == decreciente) {
  console.log("Todos los valores son iguales");
} else if (creciente) {
  console.log("El array esta ordenado Creciente");
} else if (decreciente) {
  console.log("El array esta ordenado Decreciente");
}