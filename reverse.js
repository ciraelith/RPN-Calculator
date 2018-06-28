function mergeOptions(firstToMerge, secondToMerge){
    var mergedObj = {};
    for (var attrname in firstToMerge) mergedObj[attrname] = firstToMerge[attrname];
    for (var attrname in secondToMerge) mergedObj[attrname] = secondToMerge[attrname];
    return mergedObj;
}

function reverseCalc(string, extraOperators) {
  var stack = [];
  var character;
  var baseOperators = {
    "+": function (a, b) { return a + b; },
    "-": function (a, b) { return a - b; },
    "*": function (a, b) { return a * b; }
  };
  var operators = extraOperators
  ? mergeOptions(baseOperators, extraOperators)
  : baseOperators;
  var arr = string.split(" ");
  var stack = arr.reduce(function(currentStack, nextValue){
    if (/^\d+$/.test(nextValue)){
      currentStack.push(parseInt(nextValue));
    } else if (nextValue in operators) {
      var secondOperand = currentStack.pop();
      var firstOperand = currentStack.pop();
      var value = operators[nextValue](firstOperand, secondOperand);
      currentStack.push(value);
    } else {
      throw new Error("Please put only numbers and operators");
    }
      return currentStack
  }, []);
  var result = stack[0];
  if (!string || !result) {
    throw new Error("Please put an equation to solve in a form of string with spaces");
  }

  console.log(`Your ES5 result is: ${result}`);
  return result;
}

module.exports.reverseCalc = reverseCalc;
