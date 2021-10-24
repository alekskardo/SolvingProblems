// 1. Longest Word

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(longestWord("Hello from Serbia"));
console.log(longestWord("Nice to meet you , Aleksandar"));

// second with sort()

// [].sort(function(firstElement, secondElement) {     return secondElement.length — firstElement.length; })

function findLongestWord(str) {
  let strSplit = str.split(" ");
  let longestWord = strSplit.sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}
console.log(findLongestWord("Nice to meet you , Aleksandar"));

// 2. mathSequences
// no negative numbers

function mathSequences(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }
  if (arith.size === 1) {
    return "Arithmetic";
  }
  if (geo.size === 1) {
    return "Geometric";
  }
  return -1;
}
console.log(mathSequences([2, 4, 6, 8]));
console.log(mathSequences([3, 9, 27]));
console.log(mathSequences([2, 5, 14, 89]));
