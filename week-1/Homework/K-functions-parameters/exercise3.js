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