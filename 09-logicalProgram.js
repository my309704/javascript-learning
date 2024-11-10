
console.log("====Find the even number from the array");
let array = [10,20,45,30,77,60];
let countEvenNumber = 0;
for (const element of array) {
    if (element%2==0) {
        console.log(element);
        countEvenNumber = countEvenNumber + 1;
        
        
        
    }
}
console.log(`even number count is : ${countEvenNumber}`);
console.log("map to count the vowels including lower and upper case======");


const myLove  = "I Love only JavaScript ";
const vowels = "aeiou";
let counterVowels = 0;

for (const char of myLove) {
    if (vowels.includes(char.toLowerCase())) {
        console.log(char);
     counterVowels = counterVowels + 1;
    }
    

}
console.log(`vowels count is : ${counterVowels}`);

const sentence = "JavaScript LANGUAGE";
let countAChar = 0;
for (const char of sentence) {
    if (char == 'a' || char == 'A') {
countAChar = countAChar + 1;
        
    }
}
console.log(`total a char is : ${countAChar} `);




