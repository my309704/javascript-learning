
const studentData = `{
"Name" : "Aleix Melon",
"id" : "E00245",
"role" : ["Dev" , "DBA"],
"age" : 23,
"doj" : "11-12-2019",

"married" : false,
"address" : {
"street" : "32, Laham st.",
"city" : "Innsbruck",
"country" : "Austria",


},
"referred-by" : "e0012",





}`
const studentDataV = JSON.parse(studentData);
console.log(typeof studentDataV);
console.log(studentDataV);
console.log(studentDataV.role.split(" ")[0]);


