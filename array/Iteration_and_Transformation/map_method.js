/**
 * The map() method
 *
 * The map() method in JavaScript is used to create a new array populated with the results of calling a provided function on every element in the calling array.
 * It does not modify the original array.
 *
 * Syntex
 * array.map(callback(element, index, array), thisArg)
 *
 * Parameters
 * callback: A function that is called for every element of the array, taking three arguments:
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array map was called upon.
 * thisArg (optional): A value to use as this when executing the callback function.
 *
 * Key Points
 * Returns a New Array: The map() method returns a new array with the transformed elements.
 * Does Not Modify Original Array: The original array is not changed.
 * Callback Function: The callback function is applied to each element of the array.
 * The map() method is powerful for transforming arrays and applying functions to each element.
 */

// Examples
// Basic Example
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map((element) => element * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using Index Parameter
let arr1 = ["a", "b", "c"];
let indexed = arr1.map((element, index) => `${index}: ${element}`);
console.log(indexed); // Output: ["0: a", "1: b", "2: c"]

// Working with Objects
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
let userNames = users.map((user) => user.name);
console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]

// Using thisArg
let arr2 = [1, 2, 3, 4, 5];
let context = { multiplier: 3 };
let multiplied = arr2.map(function (element) {
  return element * this.multiplier;
}, context);
console.log(multiplied); // Output: [3, 6, 9, 12, 15]
