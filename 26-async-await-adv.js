

async function getData(){
    return new Promise ((resolve,reject)=>{
// resolve("Hey.. successfully returning data....");
// reject("failed to fetch data");
setTimeout(()=>{
resolve("Hey... finally fetched the data successfuly..")

}, 7000);
    });
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