// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
  // Write your code here
  let total = 0;
  for (let i in ar) {
    total += ar[i];
  }
  return total;
}
console.log(simpleArraySum([1, 2, 3, 4, 5]));
