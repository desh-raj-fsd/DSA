/**
 * The slice() method
 * The splice() method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements at specified positions.
 * This method modifies the original array and can return an array of the removed elements.
 * Syntex
 * array.splice(start, deleteCount, item1, item2, ..., itemN)
 * Parameters
 * start: The index at which to start changing the array. If negative, it counts from the end of the array.
 * deleteCount: The number of elements to remove from the array. If 0, no elements are removed.
 * item1, item2, ..., itemN (optional): The elements to add to the array, starting at the start index.
 * If not provided, splice() will only remove elements.
 *
 * Key Points
 * Modifies Original Array: The splice() method changes the original array by removing, replacing, or adding elements.
 * Returns Removed Elements: The method returns an array of the removed elements.
 * Flexible Functionality: splice() can be used to remove, add, or replace elements in an array.
 * The splice() method is powerful for manipulating arrays in various ways.
 */

// Examples
// Removing Elements
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(2, 2);
console.log(arr); // Output: [1, 2, 5]
console.log(removed); // Output: [3, 4]

// Adding Elements
let arr1 = [1, 2, 5];
arr1.splice(2, 0, 3, 4);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// Replacing Elements
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 2, "a", "b");
console.log(arr2); // Output: [1, 2, 'a', 'b', 5]

// Using Negative Indices
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(-2, 2, "x", "y");
console.log(arr3); // Output: [1, 2, 3, 'x', 'y']
