const Studentinclass = ["Gabriel", "Natalia", "Andrea", "Winston", "Xiomara", "Alejandro", "Matias", "Simon", "Jacobo", "Winston", "Karelys"];
const TotalFriends = Studentinclass.concat("Hanna");
console.log(TotalFriends);
const alphabeticalOrder = TotalFriends.sort();
console.log(alphabeticalOrder);

function nameFcn(name, array) {
    if (array.includes(name)) {
        return `${name} is at the class with ${array}`;
    } else {
        return `${name} is not at the class with  ${array}`;
    }
}
console.log(nameFcn("Gabriel", TotalFriends));
console.log(nameFcn("Pedro", TotalFriends));
