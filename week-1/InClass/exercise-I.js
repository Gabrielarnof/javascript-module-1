function greetingFcn(name, greetingStart) {
    const greeting = greetingStart + name;
    console.log(greeting);
}
greetingFcn("Gabriel", "Hello my name is");



function greetingFcn(name, greetingStart) {
    const greeting = greetingStart + " " + name;
    return greeting;
}

const resultGreeting = greetingFcn("Gabriel", "Hello! my name is");
console.log(resultGreeting);


function getAgeInMonths(age) {
    return age * 12
}

function createGreeting(name, age) {
    const ageInMonths = getAgeInMonths(age);

    const message = "Hello world" + " " + name + " " + "was born " + " " + ageInMonths + " " + "months ago !";
    return message;
}

console.log(createGreeting("Gabriel", 41));