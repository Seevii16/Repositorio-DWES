const test = require('ava');

const dateCompare = require('../src/dateCompare');

test('first number should be 1',t =>{
    t.is(dateCompare('2017-04-30','2021-10-10'));
  });
  