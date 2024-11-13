

let professor = {
    fullName: "satish singh" ,
    city: "Mumbai",
    age : 45,
    qualification : "Post graduation" ,
    subject : "Physics",
    Behaviour : "excellent" , 
};
const fullName = professor.fullName;
console.log(`full name is : ${fullName}`);
const city = professor.city;
console.log(`city name is : ${city}`);
const age = professor["age"];
console.log(`age is: ${age}`);
const qualification = professor.qualification
console.log(`qyalification is : ${qualification}`);
const subject = professor.subject
console.log(`subject is : ${subject}`);
const Behaviour = professor.Behaviour
console.log(`Behaviour is: ${Behaviour}`);
console.log(professor);
professor.totalExperience = "14 years";
console.log(professor.totalExperience);

let professor = {
    fullName: "satish singh" ,
    city: "Mumbai",
    age : 45,
    qualification : "Post graduation" ,
    subject : "Physics",
    Behaviour : "excellent" , 
    Certificate : ["Hacker Rank Participaton","Certificate in FE course","Certificate in Adv Programming"],
    Degree: {
        engineering : "CSC",
        PHD: "Adv Computing",

        postGraduation:"Science",
        doctor: "ENT",


    }



}
con
