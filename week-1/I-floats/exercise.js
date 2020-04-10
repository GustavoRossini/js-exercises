var numberOfStudents = 15;
var numberOfMentors = 8;

var sum= (numberOfMentors + numberOfStudents);

var roundpercentageofStudents= (Math.round((numberOfStudents / sum)  * 100));
var roundpercentageofMentors= (Math.round((numberOfMentors / sum)  * 100));


console.log ("Percentage of Students:", roundpercentageofStudents, "%")
console.log ("Percentage of Mentors:", roundpercentageofMentors, "%")