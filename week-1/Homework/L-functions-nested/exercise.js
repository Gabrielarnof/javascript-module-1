var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function toUpper(phrase) {
    var upperCased = phrase.toUpperCase();
    return upperCased;
}
function greeting(name, greetingStart) {
    var greeting = `${greetingStart} ${name}`;

    return toUpper(greeting);
}
var greetingStart = "hello";

console.log(greeting(mentor1, greetingStart));
console.log(greeting(mentor2, greetingStart));
console.log(greeting(mentor3, greetingStart));
console.log(greeting(mentor4, greetingStart));
console.log(greeting(mentor5, greetingStart));