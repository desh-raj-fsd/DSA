/**
 * The keys() method
 *
 * The keys() method in JavaScript is used to create a new array iterator object that contains the keys (indices) for each element in the array.
 * This method is part of the ECMAScript 2015 (ES6) specification and allows you to easily iterate over the array indices.
 * Syntex
 * array.keys()
 *
 * Key Points
 * Creates an Iterator: The keys() method returns a new array iterator object that contains the keys for each element in the array.
 * Used with for...of: This iterator can be used with for...of loops to iterate over the indices of the array.
 * ES6 Feature: The method is part of the ECMAScript 2015 (ES6) specification, ensuring compatibility with modern JavaScript environments.
 * The keys() method is a simple and efficient way to access the indices of an array, making it useful for various array operations.
 */

// Examples
// Basic Example
let arr = ["a", "b", "c"];
let iterator = arr.keys();

for (let key of iterator) {
  console.log(key);
}
// Output:
// 0
// 1
// 2

// In this example, the keys() method creates an iterator object for the array. Using a for...of loop, you can iterate over the keys (indices) of the array.

// Using the Iterator with next()
let arr1 = ["a", "b", "c"];
let iterator1 = arr1.keys();

console.log(iterator1.next().value); // Output: 0
console.log(iterator1.next().value); // Output: 1
console.log(iterator1.next().value); // Output: 2
