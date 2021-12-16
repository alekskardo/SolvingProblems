// Remove Every nth Element from an Array

"use strict";
// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// // for (let i = 2; i < nums.length; i+=3) {
// //         delete nums[i];
// // }
// // nums = nums.filter(item => item)

// // console.log(nums);
// // console.log(nums.length);

// let newArray = nums.filter((item, idx) => ((idx + 1)% 3 !== 0) )

// console.log(newArray);

function daysInBudget(budget, ratePerHour) {
  let numberOfDays = budget / (ratePerHour * 8);
  return Math.floor(numberOfDays);
}

console.log(daysInBudget(20000,89))