function stringHandsOn(){
var str = "   Hey you are doing good, keep it up     ";
console.log(`1. Given string are : ${str}`);
console.log(`2.Total length of string is : ${str.length}`);
var result = str.trim();
console.log(`3.After trim string is : ${result} and it's length is ${result.length}`);
console.log(`4.My first char ${result.charAt(0)} and last char ${result.charAt(result.length-1)}`);
var resultValue= result.split("  ");
console.log(`5.Total words is : ${resultValue.length}`);
var result = result.indexOf("good");
console.log(`6. Index word is : ${result}`); 
    }
stringHandsOn();