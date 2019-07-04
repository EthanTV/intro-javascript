let message =  "good morning";

console.log(message);
message ="how are you today?";

let name = Name(prompt(" enter your first mame:"));
console.log(message + name);
let number = number(prompt("enter your age:"));
if (number > 0) {
    
    console.log( number + "is positive");
} else if(number <0) {
    console.log(number + "is negative");
} else {
    console.log(number+"is zero");
} if (number>= 0 && number <= 100) {
    console.log(number + "is between 0 and 100, both included");
}