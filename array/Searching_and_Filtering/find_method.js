/**
 * The find() method
 *
 * The find() method in JavaScript is used to return the value of the first element in an array that satisfies the provided testing function.
 * If no elements satisfy the testing function, it returns undefined.
 *
 * Syntex
 * array.find(callback(element, index, array), thisArg)
 *
 * Parameters
 * callback: A function to execute on each value in the array, taking three arguments:
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array find was called upon.
 * thisArg (optional): A value to use as this when executing the callback function.
 *
 * Key Points
 * Returns First Match: The find() method returns the value of the first element that satisfies the provided function.
 * If no elements satisfy the function, it returns undefined.
 * Does Not Modify Original Array: The original array is not modified.
 * Callback Function: The callback function must return a truthy value for an element to be considered a match.
 * The find() method is useful for quickly locating an element in an array based on a specific condition.
 */

// Examples
// Finding an Element in an Array
let arr = [5, 12, 8, 130, 44];
let found = arr.find((element) => element > 10);
console.log(found); // Output: 12
// In this example, the find() method returns the first element in the array that is greater than 10.

// Finding an Object in an Array
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
let user = users.find((user) => user.id === 2);
console.log(user); // Output: { id: 2, name: 'Bob' }

// Using thisArg
let arr1 = [4, 9, 16, 25];
let obj = { threshold: 10 };
function isGreaterThanThreshold(element) {
  return element > this.threshold;
}
let found1 = arr1.find(isGreaterThanThreshold, obj);
console.log(found1); // Output: 16
