const string = process.argv.slice(2)[0];
const extraOperators = require('./extraOperators').extraOperators;

const reverseCalc = require('./reverseE6').reverseCalc;
const reverseCalc5 = require('./reverse').reverseCalc;

reverseCalc(string, extraOperators);
reverseCalc5(string, extraOperators);
