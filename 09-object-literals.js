console.log(`=========1. Object literals========`);

let person = {
    
};
console.log(typeof person);
console.log(person);

console.log(`=======Reading object from the object======`);
console.log(`========1. Dot notation======`);
const fullName = person.fullName;
console.log(`Person full name is : ${fullName}`);
const cityName = person.city;
console.log(`city name is : ${cityName}`);

console.log("=====Sqaure racket notation");
const age = person["age"];
console.log(`person age is: ${age}`);

console.log(`Adding property into object`);
person.graduation = "MSC Physics";
console.log(person);
console.log(person.graduation);

console.log("=====Delete values from theobject=====");
delete person.isMarried;
console.log(person);

console.log("========Update property into the object====");
person.age = 45;
console.log(person);

let employee = {};
employee.name = "Mohit";
console.log(employee);

let student = {
fullName : "Swastik",
email: "abc@gmail.com",
qualification: "BE CSC",
gender: "Male",
isMarried: false,
age: 25,
Hobbies: ["Travelling","Talking with girls","Reading"],
details:function(){
    console.log(`student details is: ${this.fullName}`);
    console.log(`email is: ${this.email}`);
    console.log(`qualification is: ${this.qualification}`);
    console.log(`isMarried status is: ${this.isMarried}`);
    console.log(`age is: ${this.age}`);
    console.log(`hobbies is : ${this.Hobbies}`);
    
} 
}
student.details();

let studentJenny = {
    fullName : "Jenny",
    email: "jenny@gmail.com",
    qualification: "BE CSC",
    gender: "Female",
    isMarried: true,
    age: 55,
    Hobbies: ["Travelling","Programming","Reading"],
    marks:{
        physics: 90,
        maths: 67,
        programming: 89,
        socialScience: 78,
    }
}
console.log(studentJenny.marks.programming);
studentJenny.Hobbies.push("watching movie");
const arrayHobbies = studentJenny.Hobbies;
for (const element of arrayHobbies) {
    console.log(element);
    
}
