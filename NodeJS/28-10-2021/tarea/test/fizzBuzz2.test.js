const fizzBuzz2 = require('../src/fizzBuzz2');

/*test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
}); */

test('first number should be 1',()=>{
    expect(fizzBuzz2(1)).toBe(1);
  });


  test('number 5 should be buzz',() =>{
    expect(fizzBuzz2(5)).toBe('buzz');
  });

  test('number 3 should be fizz',() =>{
    expect(fizzBuzz2(3)).toBe('fizz');
  });
  
  test('Error: should be fizz',() =>{
    expect(fizzBuzz2(1)).toBe('fizz');
  });