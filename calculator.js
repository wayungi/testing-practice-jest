class Calculator {

  add = (number1, number2) => {
    return number1 + number2
  };

  subtract = (number1, number2) => {
    return number1 - number2
  };

  divide = (numerator, denominator) => {
    if(denominator === 0){
      throw new Error("Divisor cannot be zero");
    } 
    return numerator / denominator;
  };

  multiply = (number1, number2) => {
    return number1 * number2;
  };
}

module.exports = Calculator;