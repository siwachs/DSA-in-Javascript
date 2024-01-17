const array = [2, 3, 1, 3, 2, 7, 1, 9, 10, 12, 54, 13, 90, -90, 53];
let largest = Number.MIN_SAFE_INTEGER;
let secondLargest = Number.MIN_SAFE_INTEGER;
for (const num of array) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num !== largest && num > secondLargest) {
    secondLargest = num;
  }
}
console.log(secondLargest);
