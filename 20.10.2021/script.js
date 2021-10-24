// Two ways to confirm the ending of a String in JavaScript

// using the substr() method
// using endsWith() method

function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));

function confirmEnding2(string, target) {
  return string.substr(-target.length) === target ? true : false;
}

console.log(confirmEnding2("Aleksandar", "n"));

const confirmEnding3 = (string, target) =>
  string.substr(-target.length) === target ? true : false;
console.log(confirmEnding3("Aleksandar", "n"));

////////////////////////////////////////////////////////////////////////////////////////////////

// with endsWith()

const endWith = (string, target) => string.endsWith(target);

console.log(endWith("Bastian", "n"));
