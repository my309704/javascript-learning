console.log("==========declare and initialization======");

var age;
age = 20;
console.log(age);
let city;
city = "pune";
console.log(city);

const isMarried = true;

console.log("==========2.Redeclaration========");
var age = 30;
console.log(age);
city = "Mumbai";

console.log("==========3. Scope========");
function  demo(){
    var n1 = 10;
    let n2 = 20;
    const n3 = 30;
    console.log(n1,n2,n3);
    if (n1>=10) {
        var n4 = 50;
        let n5 = 60;
        const n6 = 70;
        console.log(n4,n5,n6);
        
    }
    console.log(n4);
    
    
    
    
    
    
}
demo();





