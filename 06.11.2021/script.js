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
