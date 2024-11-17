


// const studentData = `{
// // "firstName": "Elon",
// // "age": 45,
// // "city": "LA",
// // "isMarried": true,
// // "skills": ["HTML","CSS","JS","ML AI","DS"],
// // "marks" : {
// //     "PHY":90,
// //     "ENG":60,
// //     "MATH": 99 ,
// // },
// // "weight": null

// // }`;
// console.log(`=========JSON Sring to object conversion========`);
// console.log(typeof studentData);
// const studentDataInObjectFormat = JSON.parse(studentData);
// console.log(typeof studentDataInObjectFormat);
// console.log(studentDataInObjectFormat);
// console.log(studentDataInObjectFormat.skills);
// console.log(studentDataInObjectFormat.city);

console.log(`=========OBJECT TO JSON CONVERSION========`);
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
const jsonData = JSON.stringify(studentJenny);
console.log(jsonData);
console.log(typeof jsonData);





