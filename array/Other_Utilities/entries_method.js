/**
 * The entries() method
 *
 * The entries() method in JavaScript returns a new array iterator object that contains the key/value pairs for each index in the array.
 * This method is part of the ECMAScript 2015 (ES6) specification and is useful for iterating over both the indices and values of an array.
 * Syntex
 * array.entries()
 *
 * Key Points
 * Creates an Iterator: The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.
 * Used with for...of: This iterator can be used with for...of loops to iterate over the key/value pairs of the array.
 * ES6 Feature: The method is part of the ECMAScript 2015 (ES6) specification, ensuring compatibility with modern JavaScript environments.
 * The entries() method provides a straightforward way to access both the indices and values of an array, making it useful for various array operations.
 */

// Examples

let arr = ["a", "b", "c"];
let iterator = arr.entries();

for (let [index, value] of iterator) {
  console.log(index, value);
}
// Output:
// 0 'a'
// 1 'b'
// 2 'c'
// In this example, the entries() method creates an iterator object for the array. Using a for...of loop, you can iterate over the key/value pairs of the array.

// Using the Iterator with next()
let arr1 = ["a", "b", "c"];
let iterator1 = arr1.entries();

console.log(iterator1.next().value); // Output: [0, 'a']
console.log(iterator1.next().value); // Output: [1, 'b']
console.log(iterator1.next().value); // Output: [2, 'c']
