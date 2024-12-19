/**
 * The lastIndexOf() method
 *
 * The lastIndexOf() method in JavaScript is used to find the index of the last occurrence of a specified value in an array.
 * It searches the array backwards, starting at a specified index, and returns -1 if the value is not found.
 * This method is case-sensitive when dealing with strings.
 *
 * Syntex
 * array.lastIndexOf(searchElement, fromIndex)
 *
 * Parameters
 * searchElement: The value to search for in the array.
 * fromIndex (optional): The position in the array at which to start the search backwards. The default is array.length - 1. If negative, it's treated as array.length + fromIndex.
 *
 * Key Points
 * Returns Index: The lastIndexOf() method returns the index of the last occurrence of the specified value.
 * Returns -1 if Not Found: If the value is not found, the method returns -1.
 * Case-Sensitive: For strings, the search is case-sensitive.
 * Search Position: You can specify the start index for the backward search with the fromIndex parameter.
 * The lastIndexOf() method is handy for finding the last occurrence of an element within an array.
 */

// Examples
// Basic Example
let arr = [1, 2, 3, 1, 2, 3];
let index = arr.lastIndexOf(3);
console.log(index); // Output: 5
// In this example, lastIndexOf(3) returns 5 because the last occurrence of 3 is at index 5.

// Value Not Found
let arr1 = [1, 2, 3, 4, 5];
let index1 = arr.lastIndexOf(6);
console.log(index1); // Output: -1
// Here, lastIndexOf(6) returns -1 because the value 6 is not present in the array.

// Using fromIndex Parameter
let arr2 = [1, 2, 3, 1, 2, 3];
let index2 = arr.lastIndexOf(3, 4);
console.log(index2); // Output: 2
// In this example, the search for 3 starts from index 4 and searches backwards, so lastIndexOf(3, 4) returns 2.

// Using Negative Indices
let arr3 = [1, 2, 3, 1, 2, 3];
let index3 = arr.lastIndexOf(2, -2);
console.log(index3); // Output: 4
// Here, the search starts two elements from the end of the array. Since the array is [1, 2, 3, 1, 2, 3], lastIndexOf(2, -2) returns 4.
