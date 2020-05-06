/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

function checkNameLonger7LettersStartingWithA (array) {
  for (var i = 0; i <= array.length; i++) {
    
    if (array[i].charAt(0) === "A" && array[i].length > 7) 
    
    {return array[i]}
 }
}


var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];


console.log (checkNameLonger7LettersStartingWithA(names));
/* EXPECTED OUTPUT */
// "Alexandra"
