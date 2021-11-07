const list = [6, 8, 91, 17, 18, 22, 5, 3, 7];
let sum = 0;

for (const n of list) {
  //   console.log(n);
  console.log((sum += n));
}
// TODO: Add code here to update the 'sum' variable
// for each loop iteration, so that in the end the
// 'sum' value is equivalent to the sum of all values
// in the list.
console.log(`The sum of all the numbers in the list is: ${sum}`);

//********************************************* */

const box = {
  width: 5,
  height: 10,
  depth: 8,
};
// A function to calculate the volume of a box object

function getBoxVolume() {
  const width = box.width;
  console.log(`The width of the box is ${width}`);
  // Your job: complete this function to return the volume of the box

  const volume = box.depth * box.height * box.width;
  return volume;
}

const volume = getBoxVolume(box);
console.log(`The volume of the box is : ${volume}`);

/// *******************************************

const array = [78, 56, 232, 12, 18];

const findSmallestInt = (args) => {
  args.sort((a, b) => a - b);
  return args[0];
};

console.log(findSmallestInt(array));
