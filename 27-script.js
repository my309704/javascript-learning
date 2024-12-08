
const h2element = document.querySelector("h2");
console.log(h2element);
console.log(h2element.innerHTML);

console.log("=========queryselector() with element id========");
const lielement = document.querySelector("#react");
console.log(lielement);
console.log(lielement.innerHTML);


console.log("=========queryselector() with element class========");
const techStackElement = document.querySelector(".teckstack");
console.log(techStackElement);
console.log(techStackElement.innerHTML);

console.log("=========queryselectorAll() with element class========");
const techStackElements = document.querySelectorAll(".teckstack");
for (const element of techStackElements) {
    console.log(element.innerHTML);
    
}
    
console.log("=========queryselectorAll() with element name========");
const techStackElementss = document.querySelectorAll("li");
for (const element of techStackElementss) {
    console.log(element.innerHTML);
    
}
