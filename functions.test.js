const stringLength = require('./functions.js');


test('return length of "microverse" as 10', () => {
  expect(stringLength('microverse')).toEqual(10);
});