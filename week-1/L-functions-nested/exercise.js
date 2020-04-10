function percentage (a, b){
return Math.round((a / (a + b)) * 100);
}


var percentageofStudents = "Percentage of Students: " + percentage(8, 15) + " %.";
var percentageofMentors = "Percentage of Mentors: " + percentage(15, 8) + " %.";
 
console.log (percentageofStudents);
console.log (percentageofMentors);