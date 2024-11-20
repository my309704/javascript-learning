
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((currantValue,index)=>{
console.log(currantValue,index);



})
console.log(`========Positive numbers are========`);

const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumber.forEach((Element)=>{
if (Element>=0) {
    console.log(Element);
    
}



});
console.log(`=======Negative element are given=======`);

const newArray = [1,-7,40,502,-77,91,0,108,89,-601];
newArray.forEach((element)=>{
if (element<0) {
    console.log(element);
    
}


});
console.log(`=======even number is:`);

newArray.forEach((element)=>{
if (element%2==0) {
    console.log(`even numbers are:`, element);
    
}



});

console.log(`====FIND EVEN INDEX NUMBER======`);

const newArrays = [1,-7,40,502,-77,91,0,108,89,-601];
newArrays.forEach((element, index)=>{
if (element%2==0) {
    console.log(element, index);
    
}


});

console.log(`======sum of all element======`);

let arrays = [1,-7,40,502,-77,91,0,108,89,-601];
let sum = 0;
arrays.forEach(num=> sum += num);
console.log(sum);


