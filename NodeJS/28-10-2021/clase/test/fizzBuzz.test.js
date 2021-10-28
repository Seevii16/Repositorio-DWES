const test = require('ava');

const fizzBuzz = require('../src/fizzBuzz');

test('first number should be 1',t =>{
  t.is(fizzBuzz(1),1);
});

test('number 5 should be buzz',t =>{
    t.is(fizzBuzz(5),'buzz');
  });

  test('number 3 should be fizz',t =>{
    t.is(fizzBuzz(3), 'fizz');
  });
  
  test('Error: should be fizz',t =>{
    t.is(fizzBuzz(1), 'fizz');
  });
  