// Complete the solution so that it reverses all of the words within the string passed in.

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

const reverseWords = (str) => str.split(" ").reverse().join(" ");
console.log(reverseWords("hello world!"));

/************************************************* */

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples
// reverseList([1,2,3,4]) == [4,3,2,1]
// reverseList([3,1,5,4]) == [4,5,1,3]

const reverseList = (list) => list.reverse();
console.log(reverseList([1, 2, 3, 4]));

/************************************************************ */

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// function testEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(testEven(4))

const testEven = (n) => (n % 2 === 0 ? true : false);
console.log(testEven(5));

// ************************************************

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

console.log(digitize(35231));
