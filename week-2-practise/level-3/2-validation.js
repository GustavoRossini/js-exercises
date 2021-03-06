// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

function isNumber(num)

{return typeof num === "number";}

function isInteger(num)

{return Number.isInteger(num);}

var excludedNums = [6, 14, 91, 111];

function inExcludedNums(num)

{return excludedNums.includes(num);}

function validate(num) 
{return (isNumber(num) && isInteger(num) && !inExcludedNums(num))}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
  true
  false
*/
