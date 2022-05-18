const capitalize =  require('./capitalize.js');


test("micro should retrun Micro", () => {
  expect(capitalize('micro')).toMatch(/Micro/);
});

test("1234 should retrun 1234", () => {
  expect(capitalize('1234')).toMatch(/1234/);
});

test("MICROVERSE should retrun Microverse", () => {
  expect(capitalize('MICROVERSE')).toMatch(/Microverse/);
});
