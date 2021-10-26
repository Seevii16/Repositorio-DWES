debugger;

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolve");
      }, ms);
    });
  }
  
  async function init() {
    console.log('Hola!');
    await sleep(1000);
    console.log('Piensa en un numero del 1 al 10 :D');
    await sleep(3000);
    console.log('Multiplicalo por 9 >:)');
    await sleep(5000);
    console.log('Suma sus cifras ¬.¬');
    await sleep(3000);
    console.log('Restale 5 >:D');
    await sleep(3000);
    console.log('Voy a adivinar tu numero :P')
    await sleep(5000);
    console.log('¡Tu numero es el 4! :D')
    
  }
  
  init();
