/**
 * The Array.prototype[@@iterator]()
 *
 * The Array.prototype[@@iterator]() method in JavaScript is a built-in method that returns an iterator object which contains the values of the array. This method is part of the ECMAScript 2015 (ES6) specification and allows for the array to be iterated over in a more flexible way, such as with for...of loops.
 *
 * Syntex
 * array[Symbol.iterator]()
 *
 * Key Points
 * Iterator Object: The Array.prototype[@@iterator]() method returns an iterator object that can be used to iterate over the array's values.
 * For...of Loop: This iterator is utilized by the for...of loop to iterate through array elements.
 * Symbol: The method uses the Symbol.iterator well-known symbol to define the default iterator for the array.
 * The Array.prototype[@@iterator]() method is a powerful feature for iterating over arrays in JavaScript, providing a standard way to handle iteration in ES6 and beyond.
 * It is primarily used behind the scenes in iteration constructs (for...of, spread, Array.from(), etc.).
 */

// Examples
// Basic Example
const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// In this example, an iterator is created for the array. Calling next() on the iterator returns an object with value and done properties. value is the current array element, and done indicates whether the iterator has reached the end of the array.

// Using for...of Loop
let arr1 = [10, 20, 30];

for (let value of arr1) {
  console.log(value);
}
// Output:
// 10
// 20
// 30
// Here, the for...of loop uses the array's default iterator to iterate through each element.

// Custom Iteration
let arr2 = [1, 2, 3, 4, 5];
let iterator2 = arr2[Symbol.iterator]();
let result = iterator2.next();

while (!result.done) {
  console.log(result.value); // Output: 1, 2, 3, 4, 5
  result = iterator2.next();
}
// In this example, a while loop is used to iterate through the array using its iterator until all elements have been processed.

// Spreading an Array
// The spread operator (...) uses the default iterator to retrieve values:
const arr3 = [1, 2, 3];
const newArr = [...arr3, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

// Converting to a Different Structure
const arr4 = [100, 200, 300];
const set = new Set(arr4[Symbol.iterator]()); // Pass the iterator to Set
console.log(set); // Set { 100, 200, 300 }
