function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}
for (let number = 5; number < 20; number++) {
  if (isEven(number)) {
    let result = exponential(number);
    console.log(" The exponential of " + number + " is " + result);
  }
}
