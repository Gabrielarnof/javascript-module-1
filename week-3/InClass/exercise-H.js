const names = ["Natalia", "Gabriel", "Alejandro", "Andrea", "Mafer"];
function foundName(name) {
    if (names.find(names => names === name)) {
        return "Found me!";
    } else {
        return "Havent found me :(";
    }
}

console.log(foundName("Gabriel"));
console.log(foundName("Luiss"));
