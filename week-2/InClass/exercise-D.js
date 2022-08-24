function moodChecker(text) {
    if (text === "Happy") {
        return `${text} Good job, you're doing great!`;
    } else if (text === "Sad") {
        return `Every cloud has a silver lining`;
    } else if (typeof text === "number") {
        return `Beep beep boop`;
    } else {
        return `I'm sorry, I'm still learning about feelings!`;
    }
}
console.log(moodChecker("Sad"));