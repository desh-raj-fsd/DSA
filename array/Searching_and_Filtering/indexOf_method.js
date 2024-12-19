/**
 * The indexOf() method
 * The indexOf() method in JavaScript is used to find the index of the first occurrence of a specified value in an array.
 * If the value is not found, it returns -1. The search can start from a specified index.
 *
 * Syntex
 * array.indexOf(searchElement, fromIndex)
 *
 * Parameters
 * searchElement: The value to search for in the array.
 * fromIndex (optional): The position in the array at which to start the search. The default is 0. If negative, it's treated as array.length + fromIndex.
 *
 * Key Points
 * Returns Index: The indexOf() method returns the index of the first occurrence of the specified value.
 * Returns -1 if Not Found: If the value is not found, the method returns -1.
 * Case-Sensitive: For strings, the search is case-sensitive.
 * Search Position: You can specify the start index with the fromIndex parameter.
 * The indexOf() method is useful for locating the position of an element within an array.
 */

// Examples
// Basic Example
let arr = [1, 2, 3, 4, 5];
let index = arr.indexOf(3);
console.log(index); // Output: 2
// In this example, indexOf(3) returns 2 because the value 3 is located at index 2 in the array.

// Value Not Found
let arr1 = [1, 2, 3, 4, 5];
let index1 = arr1.indexOf(6);
console.log(index1); // Output: -1
// Here, indexOf(6) returns -1 because the value 6 is not present in the array.

// Using fromIndex Parameter
let arr2 = [1, 2, 3, 1, 2, 3];
let index2 = arr2.indexOf(3, 3);
console.log(index2); // Output: 5
// In this example, the search for 3 starts from index 3, and indexOf(3, 3) returns 5 because the next occurrence of 3 after index 3 is at index 5.

// Using Negative Indices
let arr3 = [1, 2, 3, 4, 5];
let index3 = arr3.indexOf(5, -3);
console.log(index3); // Output: 4
