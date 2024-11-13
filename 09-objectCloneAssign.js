
let bankSbi = {
    bankFullName: "sbi",
    totalStaff: 10,
    ifscCode: "sbin98776",
    accountNum: 298278623228628,
    atmMachine: true,

}
console.log(bankSbi);

let bankLocation = {
    street: "Chandivali",
    city: "Mumbai",
    pin: 400072,
    block: "sakinaka",
}

console.log(bankLocation);

const newObj = Object.assign({},bankSbi);
console.log(bankSbi);
console.log(newObj);
newObj.bankFullName = "HDFC";
console.log(bankSbi);
console.log(newObj);




// const newAdd= {...bankLocation,...bankSbi};
// console.log(newAdd);

let rateOfInterest = {
    homeLoanInterst : 8,
    personalLoanInterest : 11,
    dueInterst: 13,
}
console.log(rateOfInterest);

let sbiDetails = Object.assign(bankSbi,bankLocation,rateOfInterest);
console.log(sbiDetails);
const mergeData = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(mergeData);
console.log("========Using travesre method=====");

for (const key in mergeData) {
     {
        const element = mergeData[key];
        console.log(element);
        
        
    }
}

