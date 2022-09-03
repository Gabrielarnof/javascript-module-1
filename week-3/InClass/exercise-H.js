const names = ["Natalia", "Gabriel", "Alejandro", "Andrea", "Mafer"];
function findName(name) {
    if (names.find(names => names === name)) {
        return "Found me!";
    } else {
        return "Havent found me :(";
    }
}

console.log(findName("Gabriel"));
console.log(findName("Luiss"));
