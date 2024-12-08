
function squareOfWordLenth(stringValue){
   var  stringLength = stringValue.length;
   var result = stringLength * stringLength;
   return result;



}
var returnValue = squareOfWordLenth("Javascript");
console.log(`Given word is: JavaScript and it's length square is: ${returnValue}`);

var returnValue = squareOfWordLenth("Google Chrome");
console.log(`Given word is: Google Chrome and it's length square is: ${returnValue}`);

var returnValue = squareOfWordLenth("Web Developer Smart");
console.log(`Given word is: Web Developer Smart and it's length square is: ${returnValue}`);


function stringOperation(givenString){
    var strLength = givenString.length
    var words = givenString.split(" ");
    var totalWords = words.length;
    var strDivision = strLength/totalWords
    console.log(`Total number of length divide by total number of words is: ${strDivision}`);
    var strDivision = strLength*totalWords
    console.log(`Total number of length multiply by total number of words is: ${strDivision}`);
    
    


}
stringOperation("I am Angular Developer");




function schoolName(str){
    var stringLength = str.length;
    var words = str.split(" ");
    var totalWords = words.length;

    var strDivision = stringLength/totalWords;
    console.log(strDivision);
    


}

schoolName("Chnadrabhan sharma college");