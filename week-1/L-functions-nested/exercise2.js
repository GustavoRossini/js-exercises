function greeting (a){
    return ("hello " + a)
}

function greetingUpperCase (a){

    var uppercasemessage = greeting(a).toUpperCase();
    return uppercasemessage;
 
}
 

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log (greetingUpperCase (mentor1));
console.log (greetingUpperCase (mentor2));
console.log (greetingUpperCase (mentor3));
console.log (greetingUpperCase (mentor4));
console.log (greetingUpperCase (mentor5));

