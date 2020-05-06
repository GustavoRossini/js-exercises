// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method
function cloneArray(arr) {
  return arr.slice();
}

function remove(arr, valueToRemove) {

var indexToRemove = arr.indexOf(valueToRemove);

var newArr = cloneArray(arr);

newArr.splice(indexToRemove, 1);

return newArr;
// complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNames);

console.log(names);
/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
