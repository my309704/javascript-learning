
let array = [10,20,40,10,60];
array.forEach((currantValue , index, arr)=>{
console.log(currantValue, index,arr);

});

console.log(`========forEach()with mandatory argument=====`);

array.forEach((element)=>{
console.log(element);

});

console.log(`====find even numbers =======`);

const arrayNum = [10,23,40,78,90,70];
arrayNum.forEach((element)=>{
if (element%2==0) {
    console.log(element);
    
}

});
console.log(`========Traversing over set========`);
let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
// console.log(mySet);
mySet.forEach(mySet=>{
console.log(mySet);




});

console.log(`=======Traversing over map collection===`);
const myMap = new Map();
myMap.set(11,"Jenny");
myMap.set(22,"stew");
myMap.set(33,"john");
myMap.set(44,"sunder");
myMap.set(5,"tesla");
myMap.forEach((value,key) => {
    console.log(`${value}} => ${key}`);
    
});






