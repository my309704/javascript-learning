
class Vehicle {
    constructor(companyName , fuelType , vehicleColor, engineType, fuelAverage){
        this.companyName = companyName;
        this.fuelType = fuelType;
        this.vehicleColor = vehicleColor;
        this.engineType = engineType;
        this.fuelAverage = fuelAverage;
    }
    details(){
        console.log(`comapany name is : ${this.companyName}`);
        console.log(`fuel type is : ${this.fuelType}`);
        console.log(`vehicle color is : ${this.vehicleColor}`);
        console.log(`engine type is : ${this.engineType}`);
        console.log(`fuel average is : ${this.fuelAverage}`);
        
        
       }

}
console.log("========KIA Details=========");

const kiaDetail = new Vehicle("KIA", " Diesel", "Black" ,"Diesel engine", 25);
kiaDetail.details();
console.log("==========MG Details=========");


const mgDetail = new Vehicle("Morries Garage", " Diesel", "White" ,"Petrol engine", 20);
mgDetail.details();
console.log("===========BMW Details=======");

const bmwDetail = new Vehicle("BMW", " Diesel", "White" ,"Petrol engine", 18);
bmwDetail.details();
console.log("========AUDI Details =========");

const audiDetail = new Vehicle("AUDI", " Diesel", "White" ,"Petrol engine", 16);
audiDetail.details();
console.log("=========FERRARI Details======");

const ferrariDetail = new Vehicle("Ferrari", " Diesel", "RED" ,"Turbo engine", 20);
ferrariDetail.details();

console.log("=========College Details========");

class College {
constructor(collegeName, location,principalName,totalSubject,totalStaff){
    this.collegeName = collegeName;
    this.location = location;
    this.principalName = principalName;
    this.totalSubject = totalSubject;
    this.totalStaff = totalStaff;
} 
display(){
    console.log(`college name is : ${this.collegeName}, college location is : ${this.location}, principal name is : ${this.principalName}, total subject is : ${this.totalSubject}, total staff is : ${this.totalStaff}`);
    

}
}
console.log("======Chandrabhan Sharma College=======");

const chanName = new College("Chandrabhan Sharma College", "Powai","Dr. Chitra Natrajan","15",25);
chanName.display();
console.log("=========Ram Niranjan Jhunjhunwala College=====");

const rjName = new College("Ram niranjan Jhunjhunvala", "Ghatkopar","Dr Himanshu Dawda","35",45);
rjName.display();
console.log("======Mithibai College========");

const mithiName = new College("Mithibai College", "Andheri","Prof. Krutika Desai","40",50);
mithiName.display();
console.log("===========S M SHETTY COLLEGE======");

const smName = new College("S M SHETTY College", "Powai","Dr.Shridhar Shetty ","40",60);
smName.display();



