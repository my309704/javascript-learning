
let professor ={
    fullName: "Satish singh",
    age: 45,
    city: "Mumbai",
    isMarried: true,
    Email:"abc@gmail.com",
    Certificate : ["Hacker Rank Participaton","Certificate in FE course","Certificate in Adv Programming"],
}

console.log("Professor five property is..");
console.log(professor);
const fullName = professor.fullName;
console.log(`Professor full name is: ${fullName}`);
console.log(`Adding new property total experience is.`);

professor.totalExperience = "14 years";
console.log(professor);
console.log(professor.totalExperience);
console.log(`modify property in object`);
professor.age = 50;
console.log(professor);

let professors ={
    fullName: "Satish singh",
    age: 45,
    city: "Mumbai",
    isMarried: true,
    Email:"abc@gmail.com",
    Certificate : ["Hacker Rank Participaton","Certificate in FE course","Certificate in Adv Programming"],
    details: function(){
        console.log(`certificate is : ${this.Certificate}`);
        
    }
}
professors.details();

professors.Certificate.splice(2,0,"Oracle certified");
console.log(`added certificate`);
console.log(professors.Certificate);
console.log(`Traverse the array in the object`);


const professorCertificate = professors.Certificate;
for (const element of professorCertificate) {
    console.log(element);
    
}


let professorss ={
    fullName: "Satish singh",
    age: 45,
    city: "Mumbai",
    isMarried: true,
    Email:"abc@gmail.com",
    Certificate : ["Hacker Rank Participaton","Certificate in FE course","Certificate in Adv Programming"],
    degreesDetails : {
    egineering : "CSC",
    PHD: "Adv Computing",
    postGraduation:"Science",
    doctor: "ENT",
    BE: "BE in computer science",
    MBA: "English",
}
}
console.log("Nested object degrees.");

console.log(professorss.degreesDetails.egineering);
console.log(professorss.degreesDetails.PHD);
console.log(professorss.degreesDetails.postGraduation);
console.log(professorss.degreesDetails.doctor);
console.log(professorss.degreesDetails.BE);
console.log(professorss.degreesDetails.MBA);

console.log(`last element of the array`);
console.log(professorss.Certificate[professorss.Certificate.length-1]);
















