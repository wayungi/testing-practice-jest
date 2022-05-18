const stringLength = require('./stringlength.js');

test('return length of "microverse" as 10', () => {
  expect(stringLength('microverse')).toEqual(10);
});

test('length of "" is less than 1', () => {
  expect(() => { stringLength('') }).toThrow('String length must be between 1 & 10 inclusive');
});


test('length of dormitories is greater than 10', () => {
  expect(() => { stringLength('dormitories') }).toThrow('String length must be between 1 & 10 inclusive');
});
