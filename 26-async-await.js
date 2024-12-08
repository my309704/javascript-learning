
async function getData(){
let greet = "Hello Good Morning";
return greet;

}

async function main(){
console.log("=======start main()=====");
      try {
        const result= await getData();
      
        console.log(result);
      } catch (error) {
        console.log(error);
        
      }
        

    //   });
    //   console.log(result);
      
console.log("======= end main()=====");

}
main();