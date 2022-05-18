test("micro should retrun Micro", () => {
  expect(capitalze('micro')).toMatch(/Micro/);
});


test("1234 should retrun 1234", () => {
  expect(capitalze('micro')).toMatch(/1234/);
});

test("MICROVERSE should retrun Microverse", () => {
  expect(capitalze('MICROVERSE')).toMatch(/Microverse/);
});
