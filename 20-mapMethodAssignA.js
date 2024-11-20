
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
let numToAdd = 10;
console.log(`=====add 10 in each element====`);

let newArr = arrayNumbers.map(element=> element+ numToAdd);
console.log(arrayNumbers);
console.log(newArr);
let arrNumbers = [20,11,40,25,23,11,9,31,60,2,19];
const arrayCube = arrNumbers.map((element)=>{
    return element*element*element;
});
console.log(`======Cube of the element ======`);

console.log(arrNumbers);
console.log(arrayCube);


let arrIndex = [20,11,40,25,23,11,9,31,60,2,19];
const arrayIndex = arrIndex.map((element , index)=>{
    return element+index;
    
    
});
console.log(`=======adding index in corresponding number====`);

console.log(arrIndex)
    console.log(arrayIndex);
    
    let arrIndexs = [20,11,40,25,23,11,9,31,60,2,19];
    const arrNum = arrIndex.filter((element)=>{
        return element %2 ==0;


    });
    console.log(`=====filter() method to get even numner====`);
    
    console.log(arrIndex);
    
    console.log(arrNum);
    
    







