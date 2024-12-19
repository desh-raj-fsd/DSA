/**
 * The unshift() method in JavaScript is used to add one or more elements to the beginning of an array and returns the new length of the array.
 * This method modifies the original array.
 * Syntax
 * array.unshift(element1, ..., elementN)
 * Parameters
 * element1, ..., elementN: The elements to add to the beginning of the array.
 * Key Points
 * Modifies Original Array: The unshift() method changes the length of the original array by adding elements to the beginning.
 * Returns New Length: The method returns the new length of the array after the elements have been added.
 * Multiple Elements: You can add multiple elements at once by passing them as arguments to the unshift() method.
 * The unshift() method is quite handy for adding elements to the start of an array, especially in scenarios where order matters, like queues.
 */

// Examples
let arr = [2, 3, 4];
let newLength = arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4]
console.log(newLength); // Output: 4

// Adding Multiple Elements
let arr1 = [3, 4];
let newLength1 = arr.unshift(1, 2);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(newLength1); // Output: 4

// Using unshift() with Arrays
let arr2 = [4, 5];
let arr3 = [1, 2, 3];
arr2.unshift(...arr3);
console.log(arr2); // Output: [1, 2, 3, 4, 5]
