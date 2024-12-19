/**
 * The findIndex() method
 *
 * The findIndex() method in JavaScript is used to return the index of the first element in an array that satisfies the provided testing function.
 * If no elements satisfy the testing function, it returns -1.
 *
 * Syntex
 * array.findIndex(callback(element, index, array), thisArg)
 *
 * Parameters
 * callback: A function to execute on each value in the array, taking three arguments:
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array findIndex was called upon.
 * thisArg (optional): A value to use as this when executing the callback function.
 *
 * Key Points
 * Returns Index: The findIndex() method returns the index of the first element that satisfies the provided function. If no elements satisfy the function, it returns -1.
 * Does Not Modify Original Array: The original array is not modified.
 * Callback Function: The callback function must return a truthy value for an element to be considered a match.
 * The findIndex() method is useful for locating the position of an element in an array based on specific conditions.
 */

// Examples
// Basic Example
let arr = [5, 12, 8, 130, 44];
let index = arr.findIndex((element) => element > 10);
console.log(index); // Output: 1
// In this example, the findIndex() method returns the index of the first element in the array that is greater than 10, which is 1.

// Finding an Object in an Array
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
let index1 = users.findIndex((user) => user.id === 2);
console.log(index1); // Output: 1
// Here, the findIndex() method returns the index of the first user object with an id of 2, which is 1.

// Using thisArg
let arr1 = [4, 9, 16, 25];
let obj = { threshold: 10 };
function isGreaterThanThreshold(element) {
  return element > this.threshold;
}
let index2 = arr1.findIndex(isGreaterThanThreshold, obj);
console.log(index2); // Output: 2
// In this example, the findIndex() method uses thisArg to provide a context (obj) for the callback function. It returns the index of the first element greater than 10, which is 16 at index 2.
