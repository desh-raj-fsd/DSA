/**
 * The push() method
 * The push() method in JavaScript is used to add one or more elements to the end of an array.
 * This method changes the original array and returns the new length of the array.
 * Syntex
 * array.push()
 *
 * Key Points
 * Modifies Original Array: The push() method modifies the original array by adding elements to the end.
 * Returns New Length: The method returns the new length of the array after the elements have been added.
 * Multiple Elements: You can add multiple elements at once by passing them as arguments to the push() method.
 * The push() method is quite handy for dynamically adding elements to an array in various situations.
 */

// Examples

// Adding a Single Element
let arr = [1, 2, 3];
let newLength = arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]
console.log(newLength); // Output: 4

// Adding Multiple Elements
let arr1 = [1, 2, 3];
let newLength1 = arr1.push(4, 5, 6);
console.log(arr1); // Output: [1, 2, 3, 4, 5, 6]
console.log(newLength1); // Output: 6

// Using push() with Arrays
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
arr2.push(...arr3);
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
// In this example, the elements of arr2 are added to the end of arr1 using the spread operator (...).
