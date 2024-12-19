`use strict`;
// Write a function called same, which accepts two arrays. the function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Examples
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be the same frequency)

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return true;
  }
}
