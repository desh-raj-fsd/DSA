/**
 * The forEach() method
 *
 * The forEach() method in JavaScript executes a provided function once for each array element.
 * It's a convenient way to iterate over arrays and perform actions on their elements without explicitly writing a loop.
 *
 * Syntex
 *array.forEach(callback(element, index, array), thisArg)
 *
 * Parameters
 * callback: A function to execute on each element, taking three arguments:
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array forEach was called upon.
 * thisArg (optional): A value to use as this when executing the callback function.
 *
 * Key Points
 * No Return Value: The forEach() method does not return a new array. It returns undefined.
 * Does Not Break: You cannot use break or continue to exit from the forEach() loop.
 * Modifies Original Array: Modifications made to the array elements within the callback affect the original array.
 * The forEach() method is a versatile and straightforward way to iterate over array elements and perform actions on them.
 */

// Examples
// Basic Example
let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element);
});
// Output: 1
// Output: 2
// Output: 3
// Output: 4
// Output: 5

// Using Index and Array Parameters
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});
// Output: Element: 1, Index: 0, Array: 1,2,3,4,5
// Output: Element: 2, Index: 1, Array: 1,2,3,4,5
// Output: Element: 3, Index: 2, Array: 1,2,3,4,5
// Output: Element: 4, Index: 3, Array: 1,2,3,4,5
// Output: Element: 5, Index: 4, Array: 1,2,3,4,5

// Modifying Array Elements
let arr2 = [1, 2, 3, 4, 5];
arr2.forEach((element, index, array) => {
  array[index] = element * 2;
});
console.log(arr2); // Output: [2, 4, 6, 8, 10]

// Using thisArg
let arr3 = [1, 2, 3, 4, 5];
let context = { multiplier: 3 };
arr3.forEach(function (element) {
  console.log(element * this.multiplier);
}, context);
// Output: 3
// Output: 6
// Output: 9
// Output: 12
// Output: 15
