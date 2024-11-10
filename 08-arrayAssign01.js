
const fruits_seasonal = ["Banana", " Orange",  "Apple", "Mango", "Water Melon"];
console.log(" Print first element====");

let indexOf0 = fruits_seasonal[0];
console.log(indexOf0);
console.log("=====Print last element");

let result = fruits_seasonal.length
const lastElement = fruits_seasonal[result-1];
console.log(lastElement);
const fruits_seasonals = ["Banana", " Orange",  "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonals);
console.log("====After addition of papaya");

fruits_seasonals.unshift("papaya");
console.log(fruits_seasonals);

const fruits_seasonalss = ["Banana", " Orange",  "Apple", "Mango", "Water Melon"];
console.log("======Remove mango====");

fruits_seasonalss.splice(3,1);
console.log(fruits_seasonalss);

const fruits_seasonal1 = ["Banana", " Orange",  "Apple", "Mango", "Water Melon"];
console.log("===addtition of pineapple=====");
fruits_seasonal1.push("Pineapple");
console.log(fruits_seasonal1);
console.log("=======addition dragon fruit====");

 fruits_seasonal1.splice(4,0,"Dragon Fruit");
 console.log(fruits_seasonal1);
 console.log("======replace orange by kiwi ");
 
 fruits_seasonal1.splice(1,2,"Kiwi");
 console.log(fruits_seasonal1);
 console.log("=====log element from index 1 to 4======");
 
 const fruits_seasonal3 = ["Orange", "Apple","Mango","Water Melon"];
for (const index in fruits_seasonal3) {
        const element = fruits_seasonal3[index];
        console.log(element);
        
        
 }
 const fruits_seasonal4 = ["Banana", " Orange",  "Apple", "Mango", "Water Melon"];
 console.log("====select last three element and console======");
 
 const resultTwo = fruits_seasonal4.slice(2);
 console.log(resultTwo);
 

 




 









