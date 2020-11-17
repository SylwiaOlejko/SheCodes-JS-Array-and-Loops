// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Monday",
  "Tusday",
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday", 
  "Funday"
];
console.log(weekDays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’

console.log(weekDays[0]);
console.log(weekDay[6]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[6]= "Funday";
console.log(weekDays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays.shift();
weekDays.shift();
console.log(weekDays);
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
function showTemperature(day){

console.log('Temperature on ${day} is 18 degrese');
}

weekDays.forEach(showTemperature);
