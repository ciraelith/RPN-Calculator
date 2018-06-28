function reverseCalc(string, extraOperators) {
  const stack = [];
  const baseOperators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };
  const operators = Object.assign({}, baseOperators, extraOperators);
  let arr = string.split(" ");
  for (let character of arr) {
    if (/^\d+$/.test(character)){
      stack.push(parseInt(character));
    } else if (character in operators) {
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();
      const value = operators[character](firstOperand, secondOperand);
      stack.push(value);
    } else {
      throw new Error("Please put only numbers and operators");
    }
  }
  const result = stack[0];
  if (!string || !result) {
    throw new Error ("Please put an equation to solve in a form of string with spaces");
  }

  console.log(`Your ES6 result is: ${result}`);
  return result;

}

module.exports.reverseCalc = reverseCalc;
