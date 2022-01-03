// Factorialize a Number with Recursion

// function factorialize(num) {
//     if (num < 0) {
//         return -1
//     } else if(num == 0) {
//         return 1
//     } else {
//         return (num * factorialize (num - 1 ))
//     }
// }

// console.log(factorialize(5))

/*********************************************************** */
// with a while loop

// function factorialize(num) {
//   var result = num;
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   while (num > 1) {
//     num--;
//     result = result * num;
//   }
//   return result
// }
//  console.log(factorialize(5))

/************************************************* */
// With a for loop

// function factorialize(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }

// console.log(factorialize(5));

/*************************************************************** */

//Return the First Element in an Array

// const getFirstValue = (num) => num[0];
// console.log(getFirstValue([80, 5, 100]))

/********************************************* */

//Create an algorithm that will seek out the largest and smallest number in an array without using pre-build function or methods (such as Math.max())

// var arr = [70, 65, 3, 21, 58, 93, 12, 82, 15, 34, 73, 2, 12];

// var max = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// var min = arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

//****************************************************************** */

//Create a function that will accept a number and check whether or not it is even.

// const isEven = (num) =>
//   num % 2 === 0 ? console.log("Even") : console.log("Not even");

// isEven(6);

//******************************************************* */

// Finding the minimum or maximum number from an Array of numbers with spread operator

// console.log(Math.max(...[1, 2, 3, 4, 5, 6, 7, 89, 7, 77, 435, 53534]));
// console.log(Math.min(...[1, 2, 3, 4, 5, 6, 7, 89, 7, 77, 435, 53534]));

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// function equalTen(a, b) {
//   return a + b === 10 || a === 10 || b === 10;
// }
// console.log(equalTen(1, 9));
