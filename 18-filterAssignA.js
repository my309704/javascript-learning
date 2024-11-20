
console.log(`=======filter() method using`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
arrayNumbers.filter((element)=>{
if (element>=50) {
    console.log(`Number which are greater than 50..`);
    
   console.log(element);
    
}
    
    
    });
    console.log(`even number are given below`);

    const evenNumbers = [20,11,40,25,37,49,9,90,60,2,19];
    evenNumbers.filter((element)=>{

    

    if (element%2==0) {
        console.log(element);
        
    }
});

console.log(`odd numbers are given below`);

const oddNumbers = [20,11,40,25,37,49,9,90,60,2,19];
oddNumbers.filter((element)=>{



if (element%2==1) {
    console.log(element);
    
}
});
console.log(`to find multiple of 5.`);

const multiNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const multiOf5 = multiNumbers.filter(num=> num%5===0);
console.log(multiNumbers);

console.log(multiOf5);

console.log(`to find number between 20 to 50`);

const betNumberss = [20,11,40,25,37,49,9,90,60,2,19];
const betweenNumber= betNumberss.filter(num=> num>=20 && num <=50);
console.log(betweenNumber);



