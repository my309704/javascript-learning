
var evenOrOdd = function (num){
if (num%2==0) {
    return "even";
} else {
    return "odd";
}

}
var result = evenOrOdd(45);
console.log(` Is number 45 even or odd: ${result}`);

var result = evenOrOdd(70)
console.log(` Is number 70 even or odd: ${result}`);

var result = evenOrOdd(67)
console.log(` Is number 67 even or odd: ${result}`);

var result = evenOrOdd(98)
console.log(` Is number 98 even or odd: ${result}`);
console.log("========================================");


function voteEligibility (age) {
if (age>=18) {
    console.log(`YES you are eligible for vote`);
    console.log(`=====================================`);
    
    
} else {
    console.log(`NO you are not eligible for vote`);
    console.log(`======================================`);
    
    
}

}

voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

function stringChar(str){
    if (str.length>=10) {
        console.log(`Yes given string contains more than 10 character `);
        
        
        
    } else {
        console.log(`No given string does not contains more than 10 character`);
        console.log(`======================================================`);
        
        
    }
}
stringChar("Javascript");
stringChar("ES6");

function strValue(str){
if (str.startsWith("Java")) {
    console.log(`YES given sring starts with Java `);
    
} else {
    console.log(`NO given string does not start with Java`);
    
}


}
strValue("JavaScript Language");
strValue("Programming  Language");


 








