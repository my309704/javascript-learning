
class Person{
    constructor(fullName,city){
        this.fullName = fullName;
        this.city = city;
    }
    details(){
        console.log(`======Students ${this.fullName} details ====`);
        console.log(`city: ${this.city}`);
        
        
    }
}

class Student extends Person{
    constructor(fullName,city,profession, age){
        super(fullName,city);
        this.profession= profession;
        this.age = age;
    }
    studentDetails(){
        console.log(`Student detail: ${this.fullName}, ${this.city}, ${this.age}, ${this.profession}`);
        
    }
}
const stdElon = new Student ("elon", "la", "student","22");
console.log(stdElon);
stdElon.studentDetails();
stdElon.details();

