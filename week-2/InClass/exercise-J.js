const array = ["Gabriel", "Amy", "Maya"];
function secondMatchesAmy(array) {
  if (array[1]) {
    return "Second index matched!";
  } else
    return "Second index not matched";
}
console.log(secondMatchesAmy(array));