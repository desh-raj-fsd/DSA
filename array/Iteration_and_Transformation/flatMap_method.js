/**
 * The flatMap() method
 *
 * The flatMap() method in JavaScript first maps each element using a mapping function,
 * then flattens the result into a new array.
 * It is essentially a combination of the map() and flat() methods with a depth of 1.
 *
 * Syntex
 * array.flatMap(callback(element, index, array), thisArg)
 *
 * Parameters
 * callback: A function that produces an element of the new Array, taking three arguments:
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array flatMap was called upon.
 * thisArg (optional): A value to use as this when executing the callback function.
 *
 * Key Points
 * Combines Map and Flat: The flatMap() method combines the functionalities of map() and flat() with a depth of 1.
 * Returns a New Array: It returns a new array and does not modify the original array.
 * Callback Function: The callback function is applied to each element, and the resulting arrays are flattened into a single array.
 * The flatMap() method is very powerful for both transforming and flattening arrays in a single operation.
 */

// Examples
let arr = [1, 2, 3, 4];
let flatMappedArray = arr.flatMap((x) => [x, x * 2]);
console.log(flatMappedArray); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
// In this example, each element is mapped to an array containing the element and its double. The flatMap() method then flattens these arrays into a single array.

// Removing Empty Slots
let arr1 = [1, 2, 3, 4];
let flatMappedArray1 = arr1.flatMap((x) => (x % 2 === 0 ? [x, x * 2] : []));
console.log(flatMappedArray1); // Output: [2, 4, 4, 8]
// Here, only even numbers are mapped to arrays, and odd numbers are mapped to empty arrays, effectively filtering them out.

// Manipulating Arrays of Strings
let words = ["hello", "world"];
let letters = words.flatMap((word) => word.split(""));
console.log(letters); // Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
// In this example, each word is split into an array of characters, and flatMap() flattens these arrays into a single array of characters.
