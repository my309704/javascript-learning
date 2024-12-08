

var greet = "Good Morning"
console.log("Given string is:", greet, "and it's lenght is:", greet.length);

//ES6 - String template
//${}-variable substitution
console.log(`Given string is: ${greet} and it's lenght is:, ${greet.length}`);

var charAtIndex0 = greet.charAt(0);
console.log(`Charactor at 0 index is :${charAtIndex0}`);

var charAtIndex7 = greet.charAt(7);
console.log(`Charactor at 7 index is :${charAtIndex7}`);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log(`Charactor at last index is : ${charAtLastIndex}`);

var firstName = "Elon";
var lastName = "Musk";
var concatResult = firstName.concat(lastName);
console.log(`concat result: ${concatResult}`);

var greet = "Good Morning";
var indexofM = greet.indexOf("M");
console.log(`index of M is: ${greet.indexOf("M")}`);
var greet = "Good Morning";
var result = greet.split(" ");
console.log(result);

var sentence = "my name is manoj yadav and i reside in mumbai and i have 4 siblings who are staying together";
var result = sentence.split(" ");
console.log(result);
console.log(result.length);

var greet = "Good Morning";
var result = greet.toUpperCase();
console.log(result);

var greet = "Good Morning";
var result = greet.toLowerCase();
console.log(result);

var city = "   pune   ";
console.log(`total length is: ${city.length}`);
var result = city.trim();
console.log(`city: ${result}, and it's length is : ${result.length}`);

console.log("=====include()=======");
var myLove = " I love only JavaScript";
var result = myLove.includes("only");
console.log(`Given strng: ${result}`);

console.log("=====search()=======");
var myLove = "I love only JavaScript";
var result = myLove.search("only");
console.log(`Given strng: ${result}`);

console.log("=====slice()=======");
var myLove = "I love only JavaScript";
var result = myLove.slice(2,6);
console.log(`Given strng: ${result}`);


















