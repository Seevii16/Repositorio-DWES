const objeto ={ a: 1, b: 2 };
console.log(Object.fromEntries(Object.entries(objeto).map( ([key,value]) => [value,key]))); 