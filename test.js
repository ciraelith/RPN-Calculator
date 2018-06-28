const assert = require('assert');
const reverseCalc = require('./reverseE6').reverseCalc;
const reverseCalc5 = require('./reverse').reverseCalc;
const extraOperators = require('./extraOperators').extraOperators;

describe('reverseCalc, reverseCalc5', function() {
    it('should properly add 2+2', function() {
      const addition = '2 2 +';
        assert.equal(reverseCalc(addition), 4);
        assert.equal(reverseCalc5(addition), 4);
    });
    it('should properly multiply 2*2', function() {
      const multiplying = '2 2 *';
        assert.equal(reverseCalc(multiplying), 4);
        assert.equal(reverseCalc5(multiplying), 4);
    });
    it('should properly substract 4-2', function() {
      const substraction = '4 2 -';
        assert.equal(reverseCalc(substraction), 2);
        assert.equal(reverseCalc5(substraction), 2);
    });
    it('should properly add 2+2+2', function() {
      const addition = '2 2 2 + +';
        assert.equal(reverseCalc(addition), 6);
        assert.equal(reverseCalc5(addition), 6);
    });
    it('should properly multiply 2*2*2', function() {
      const multiplying = '2 2 2 * *';
        assert.equal(reverseCalc(multiplying), 8);
        assert.equal(reverseCalc5(multiplying), 8);
    });
    it('should properly substract  2-2-10', function() {
      const substraction = '2 2 10 - -';
        assert.equal(reverseCalc(substraction), 10);
        assert.equal(reverseCalc5(substraction), 10);
    });
    it('should return given number', function() {
      const write = '2';
        assert.equal(reverseCalc(write), 2);
        assert.equal(reverseCalc5(write), 2);
    });
    it('should throw an error if the string is empty', function() {
      const errorString = '';
      assert.throws(function () { reverseCalc(errorString) }, Error, 'Please put an equation to solve in a form of string with spaces');
      assert.throws(function () { reverseCalc5(errorString) }, Error, 'Please put an equation to solve in a form of string with spaces');
    });
    it('should throw an error if the format is not correct', function() {
      const error = '-2 2+ +';
      assert.throws(function () { reverseCalc(error) }, Error, 'Please put equation in correct format');
      assert.throws(function () { reverseCalc5(error) }, Error, 'Please put equation in correct format');
    });
    it('should throw an error if the string contains forbidden elements', function() {
      const errorString = 'foobar++';
      assert.throws(function () { reverseCalc(errorString) }, Error, 'Please put equation in correct format');
      assert.throws(function () { reverseCalc5(errorString) }, Error, 'Please put equation in correct format');
    });
    it('should properly divide 4/2', function() {
      const division = '4 2 /';
      assert.equal(reverseCalc(division, extraOperators), 2);
      assert.equal(reverseCalc5(division, extraOperators), 2);
    });
});
