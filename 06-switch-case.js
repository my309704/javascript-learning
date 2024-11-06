
console.log("The weeks of day.....");

function dayOfTheWeek(dayNumber){
    switch (dayNumber) {
        case 0:
            console.log("Monday");
        break;
        case 1:
            console.log("Tuesday");
        break;
        case 2:
            console.log("Wednesday");
        break;
        case 3:
            console.log("Thursday");
        break;
        case 4:
            console.log("Friday");
        break;
        case 5:
            console.log("Saturday");
        break;
        case 6:
            console.log("Sunday");
        break;
    
        default:
            console.log("Invalid Day Number:",  dayNumber);
            
        break;
    }

}
dayOfTheWeek(0);
dayOfTheWeek(1);
dayOfTheWeek(2);
dayOfTheWeek(3);
dayOfTheWeek(4);
dayOfTheWeek(5);
dayOfTheWeek(6);

    
