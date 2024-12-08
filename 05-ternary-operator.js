
var n1 = 10;
var n2 = 20;
var result = n1==n2 ? "equal" : "not equal";
console.log(`${result}`);
console.log("================");


var age = 20;
var result = age >= 18 ? "You are eligible for vote" : "Sorry not, try next time ";
console.log(`${result}`);

function voteEligibility(age){
var result = age >= 18 ? "You are eligible for vote" : "Sorry not, try next time ";
console.log(`${result}`);
}
voteEligibility(17);
voteEligibility(34);

console.log("======ternary operator==========");
var marks = 60;
var result = marks>=60 ? "you get entry in the college" : "you are not elegible";
console.log(result);

