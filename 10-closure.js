globalVariable = 100;
function  outer(){
    var outerVariable = 100;
    var inner = function(){
        var innerVariable = 200;
        console.log(outerVariable);
        console.log(innerVariable);
        console.log(globalVariable);
        
        
        
    }
}