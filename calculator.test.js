const Calculator = require('./calculator.js');


describe('My calculator', () => {
  test('Addition', () => {
    const calculator = new Calculator();

    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.add(1, -1)).toEqual(0);
    expect(calculator.add(0.5, 0.7)).toEqual(1.2);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('Subtraction', () => {
    const calculator = new Calculator();

    expect(calculator.subtract(1,2)).toEqual(-1);
    expect(calculator.subtract(10,2)).toEqual(8);
    expect(calculator.subtract(-1,-1)).toEqual(0);
  })

  test('Divide', () => {
    const calculator =  new Calculator();

    expect( () => {calculator.divide(1, 0)}).toThrow('Divisor cannot be zero');
    expect(calculator.divide(1,1)).toEqual(1);
    expect(calculator.divide(10,100)).toEqual(0.1);
  })

  test('Multiplication', () => {
    const calculator = new Calculator();

    expect(calculator.multiply(0, 100)).toEqual(0);
    expect(calculator.multiply(-2, -100)).toEqual(200);
    expect(calculator.multiply(-1, 100)).toEqual(-100);


  })

 
});