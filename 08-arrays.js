
let ageList = [20,21,24,25,29,21,24,23];
console.log(ageList);

console.log(`Length of the array is: ${ageList.length}`);


console.log("=====Axxessing the using index");
let elementAtIndex2 = ageList[2];
console.log(elementAtIndex2);

let arrayLength = ageList.length;
const lastElement = ageList[arrayLength-1];
console.log(lastElement);

console.log("=======update the value in array=====");
let array = [10,20,40,30,10,60];
array[1]  = 700;
console.log(array);
array[array.length-1] = 900;
console.log(array);

console.log("=======IndexOf()=====");
let arrayNumber = [10,20,40,30,10,60];
const indexOf40 = arrayNumber.indexOf(40);
console.log(indexOf40);

const indexOf90 = arrayNumber.indexOf(90);
console.log(indexOf90);

console.log("====Traversing array===");
let arrayNumbers = [10,20,40,30,10,60];
//  index start 0, array.length
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}
console.log("=====Traversing array in reverse order=====");
for (let index = arrayNumbers.length-1; index >=0; index--) {
    const element = array[index];
    console.log(element);
    
    
}

console.log("==========Insertionin the start and end of thearray");
let arrayNumberss = [10,20,40,30,10,60];
console.log(`array before insertion====`);
console.log(arrayNumberss);
arrayNumberss.unshift(90,100);
console.log(` araay after insertion===`);
console.log(arrayNumberss);

console.log(`add after insertion at the end`);
arrayNumberss.push(777);
console.log(arrayNumberss);

console.log("========deletion array start and end of the array=====");
let arrayNumbersss = [10,20,40,30,10,60];
arrayNumbersss.shift();
arrayNumbersss.pop();
console.log(arrayNumbersss);

console.log(`=========slice=======`);
let arrayNumberssss = [10,20,40,30,10,60];
const elements = arrayNumberssss.slice(1,3);
console.log(elements);

const elementss = array.slice(2);
console.log(elementss);

console.log(`=======splice() insertion======`);
console.log(`before insertion`);

let arrayNumbersssss = [10,20,40,30,10,60];
console.log(`after insertion`);

arrayNumbersssss.splice(2,0,800);

console.log(arrayNumbersssss);

console.log(`========by deleting sone element`);

let arrayNumberssssss = [10,20,40,30,10,60];
console.log(arrayNumberssssss);
arrayNumberssssss.splice(1,1,900,700)
console.log(arrayNumberssssss);


console.log(`==================================`);
let arrayNumbersssssss = [10,20,40,30,10,60];

arrayNumbersssssss.splice(1,3,777,999);
console.log(arrayNumbersssssss);

console.log(`to delete element`);
let arrayNumberssssssss = [10,20,40,30,10,60];
arrayNumberssssssss.splice(2,3);
console.log(arrayNumberssssssss);

console.log("=======for in loop=====");
let arrayNumbersssssssss = [10,20,40,30,10,60];
for (const index in arrayNumberssssssss) {
    const element = arrayNumberssssssss[index];
    console.log(element);
    

}
console.log("======for of loop=====");

let arrayNumberssssssssss = [10,20,40,30,10,60];

for (const element of arrayNumbersssssssss) {
    console.log(element);
    
    
}
console.log("=============================================join()=======");

let arrayNumberone= [10,20,40,30,10,60];
const arrayNumberonee = arrayNumberone.join(",");
console.log(arrayNumberonee);


let arrayOne = [10,20,40];
let arrayTwo =[90,80,20];
const result = arrayOne.concat(arrayTwo);
console.log(result);


console.log("=====spread operator...=====");
console.log(arrayOne);


















































