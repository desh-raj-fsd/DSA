/**
 * The values() method
 *
 * The values() method in JavaScript returns a new array iterator object that contains the values for each index in the array. This method is part of the ECMAScript 2015 (ES6) specification and is useful for iterating over the values in an array.
 *
 * Syntex
 * array.values()
 *
 * Key Points
 * Creates an Iterator: The values() method returns a new array iterator object that contains the values for each index in the array.
 * Used with for...of: This iterator can be used with for...of loops to iterate over the values of the array.
 * ES6 Feature: The method is part of the ECMAScript 2015 (ES6) specification, ensuring compatibility with modern JavaScript environments.
 * The values() method provides a straightforward way to access the values of an array, making it useful for various array operations.
 */

// Examples
let arr = ["a", "b", "c"];
let iterator = arr.values();

for (let value of iterator) {
  console.log(value);
}
// Output:
// a
// b
// c

// Using the Iterator with next()
let arr1 = ["a", "b", "c"];
let iterator1 = arr1.values();

console.log(iterator1.next().value); // Output: a
console.log(iterator1.next().value); // Output: b
console.log(iterator1.next().value); // Output: c
