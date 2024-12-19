/**
 * The every() method
 *
 * The every() method in JavaScript tests whether all elements in an array pass a provided function's test.
 * It returns a Boolean value: true if the callback function returns a truthy value for every array element; otherwise, it returns false.
 *
 * Syntex
 * array.every(callback(element, index, array), thisArg)
 *
 * Parameters
 * callback: A function to test each element, taking three arguments:
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array every was called upon.
 * thisArg (optional): A value to use as this when executing the callback function.
 *
 * Key Points
 * Tests All Elements: The every() method checks if all elements in the array pass the test implemented by the provided function.
 * Returns Boolean: The method returns true if the callback function returns a truthy value for every element; otherwise, it returns false.
 * Short-Circuits: The every() method stops iterating through the array once it finds an element that does not pass the test.
 * The every() method is useful for validating data or ensuring that all elements in an array meet a specific condition.
 */

// Examples
// Basic Example
const arr = [2, 4, 6, 8, 10];
const res = arr.every((x) => x % 2 === 0);
console.log("res", res); // Output: true
// In this example, the every() method checks if all elements in the array are even numbers. Since they are, it returns true.

// Checking All Elements Greater Than a Value
const arr1 = [10, 20, 30, 40, 50];
const allGreaterThanFive = arr1.every((x) => x > 5);
console.log("allGreaterThanFive", allGreaterThanFive); // Output: true
// Here, the every() method checks if all elements in the array are greater than 5. It returns true because all elements meet this condition.

// Using every() with Objects
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
let allAdults = users.every((user) => user.age >= 18);
console.log("allAdults", allAdults); // Output: true
// In this example, the every() method checks if all users are adults (age 18 or older). It returns true because all users meet this criteria.

// Using thisArg
let arr2 = [1, 2, 3, 4, 5];
let obj = { min: 1, max: 10 };

function checkRange(ele) {
  return ele >= this.min && ele <= this.max;
}
let inRange = arr.every(checkRange, obj);
console.log(inRange); // Output: true
// Here, the every() method uses thisArg to provide a context (obj) for the callback function.
