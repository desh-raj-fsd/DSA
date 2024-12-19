/**
 * The reverse() method
 * The reverse() method in JavaScript is used to reverse the order of the elements in an array. This method modifies the original array and returns the array with its elements reversed.
 * Syntex
 * array.reverse()
 * Key Points
 * Modifies Original Array: The reverse() method changes the original array by reversing its elements.
 * Returns the Array: The method returns the array with its elements reversed.
 * n-Place Operation: The reversal is done in place, meaning no new array is created.
 * The reverse() method is useful for quickly reversing the order of elements in an array, whether for display purposes, algorithmic needs, or other scenarios.
 */

// Examples
// Basic Example
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]

// Reversing an Array of Strings
let str = ["a", "b", "c", "d", "e"];
str.reverse();
console.log(str); // Output: ['e', 'd', 'c', 'b', 'a']

// Reversing an Array of Mixed Elements
let arr1 = [1, "two", 3, "four", 5];
arr1.reverse();
console.log(arr1); // Output: [5, 'four', 3, 'two', 1]
