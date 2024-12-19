/**
 * The filter() method
 * The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.
 * It does not change the original array but returns a new array with the elements that meet the criteria.
 *
 * Syntex
 * array.filter(callback(element, index, array), thisArg)
 *
 * Parameters
 * callback: A function to test each element, taking three arguments:
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array filter was called upon.
 * thisArg (optional): A value to use as this when executing the callback function.
 *
 * Key Points
 * Does Not Modify Original Array: The filter() method does not change the original array.
 * Returns a New Array: It returns a new array with the elements that pass the test.
 * Test Function: The callback function must return a truthy value for an element to be included in the new array.
 * The filter() method is highly useful for creating subsets of data based on specific conditions.
 */

// Examples
// Filtering Even Numbers
let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr.filter((element) => element % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
// In this example, the filter() method creates a new array containing only the even numbers from the original array.

// Filtering Based on Object Property
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
let adults = users.filter((user) => user.age >= 30);
console.log(adults);
// Output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
// Here, the filter() method creates a new array containing only users who are 30 years old or older.

// Filtering Strings by Length
let words = ["apple", "banana", "cherry", "date"];
let longWords = words.filter((word) => word.length > 5);
console.log(longWords); // Output: ['banana', 'cherry']
// In this example, the filter() method creates a new array containing only words that are longer than 5 characters.

// Using thisArg

let arr1 = [1, 2, 3, 4, 5];
let context = { min: 2, max: 4 };
function isInRange(element) {
  return element >= this.min && element <= this.max;
}
let inRange = arr1.filter(isInRange, context);
console.log(inRange); // Output: [2, 3, 4]
// Here, the filter() method uses thisArg to provide a context (context) for the callback function.
