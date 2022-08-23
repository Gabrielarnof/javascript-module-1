function boolChecker(bool) {
  if (typeof bool === true) {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

boolChecker(true);
console.log(boolChecker(true));