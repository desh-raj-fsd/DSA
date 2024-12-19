/**
 * The slice() method
 * The slice() method in JavaScript is used to create a shallow copy of a portion of an array into a new array object.
 * It does not modify the original array but returns a new array containing the selected elements.
 * Syntex
 * array.slice(begin, end)
 * Parameters
 * begin (optional): The index at which to begin extraction. If omitted, it defaults to 0. If negative, it is treated as array.length + begin.
 * end (optional): The index before which to end extraction. The element at this index is not included. If omitted, it defaults to the length of the array. If negative, it is treated as array.length + end.
 *
 * Key Points
 * Does Not Modify Original Array: The slice() method does not change the original array.
 * Returns a New Array: It returns a new array containing the extracted elements.
 * Shallow Copy: The slice() method creates a shallow copy, meaning it copies object references, not the actual objects.
 * The slice() method is handy for extracting parts of an array without altering the original array.
 */

// Examples
// Basic Example
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3);
console.log(newArr); // Output: [2, 3]

// Using Negative Indices
let arr1 = [1, 2, 3, 4, 5];
let newArr1 = arr.slice(-3, -1);
console.log(newArr1); // Output: [3, 4]

// Copying an Entire Array
let arr2 = [1, 2, 3, 4, 5];
let newArr2 = arr.slice();
console.log(newArr2); // Output: [1, 2, 3, 4, 5]

// Using Only the Begin Parameter
let arr3 = [1, 2, 3, 4, 5];
let newArr3 = arr.slice(2);
console.log(newArr3); // Output: [3, 4, 5]
