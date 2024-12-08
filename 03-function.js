
// 
// function decleration
function show() {
    console.log("Inside show function..");
    console.log("===============");

}
//  function call or invocation
show();
show();

// type 2: function with  argument and no return type  
function square(num) {
    console.log("given number to square:", num);
    var result = num * num;
    console.log("square is:", result);
    console.log("=======================");


}
square(2);
square(5);
square(19);
square(190890);

// type 3: function with argument return value
function multiply(n1, n2, n3){
    console.log("given number:", n1, n2 ,n3);
    var result = n1 * n2 * n3;
    return result;
    }
var returnvalue = multiply(10, 35, 78);
console.log("multiplication is:", returnvalue);
console.log("================");

var resultvalue = multiply(50, 70, 80);
console.log("multiplication is:", resultvalue);



