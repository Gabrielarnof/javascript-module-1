/*
  Write a function that receives an array of string, and console.log all strings that start with letter 'T'
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function startWithT(days) {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (days[i].startsWith("T")) {
      console.log(days[i]);
    }
  }
}
startWithT(daysOfWeek);