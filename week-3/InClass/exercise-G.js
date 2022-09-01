const birthYearOfPeople = [1955, 2008, 1971, 2005, 1990, 1981, 1919];

function canDrive(year) {
    let ages = 2022 - year;
    return ages >= 17;
}
const peopleCanDrive = birthYearOfPeople.filter(canDrive);

console.log(`These are the birth years of people who can drive: ${peopleCanDrive}`);