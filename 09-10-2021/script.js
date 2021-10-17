// 1. ******************************************************************************************************************

// Negative Connotation
// You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

// Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

// "A big brown fox caught a bad rabbit" => True/true
// "Xylophones can obtain Xenon." => False/false

// function connotation(str) {
//   const words = str.split(/\s+/);
//   const positive = words.filter((word) => word[0].toLowerCase() <= "m").length;
//   const negative = words.filter((word) => word[0].toLowerCase >= "m").length;
//   return positive >= negative;
// }

// 2. *****************************************************************************************************************
//Return the Sum of Two Numbers
//Create a function that takes two numbers as arguments and return their sum.

// function addition(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Sorry but you didn't pass two numbers.";
//   }
//   return a + b;
// }

//3. *******************************************************
// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

// Input: "fun&!! time"
// Output: time

// function LongestWord(sen) {
//   let arr = sen.match(/[a-z]+/gi);
//   let sorted = arr.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   sen = sorted[0];
//   return sen;
// }
// console.log(LongestWord("fun&!!, Time"));

// 4. *****************************************
// First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

// Examples
// Input: "coderbyte"
// Output: etybredoc

// function FirstReverse(str) {
//   const reverseString = str.split('').reverse().join('');
//   return reverseString;
//   // code goes here
// }
