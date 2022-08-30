const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function birthYear(years) {
    years.forEach((year) => {
        let ages = 2022 - year;
        console.log(ages);

    });

};
birthYear(years);
const getAge = (birthYear) => 2022 - birthYear;
const birthYearOfPeople = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const peoplesAges = birthYearOfPeople.map(getAge);
console.log(peoplesAges);