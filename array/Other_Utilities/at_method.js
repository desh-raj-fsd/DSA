/**
 * The at() method
 *
 * The at() method in JavaScript is used to access an element at a given index in an array.
 * It accepts both positive and negative integers, allowing you to count from the end of the array when using negative values.
 * This method is especially useful for accessing elements from the end without needing to calculate the length of the array.
 *
 * Syntex
 * array.at(index)
 *
 * Parameters
 * index: The index of the element to return. A positive integer will count from the beginning, and a negative integer will count from the end.
 *
 * Key Points
 * Accepts Negative Indices: The at() method can use negative indices to count from the end of the array.
 * Simplifies Access: It simplifies accessing elements from the end of an array without needing to use array.length.
 * Immutable: This method does not modify the original array.
 * The at() method is a straightforward and efficient way to access elements in an array, especially when working with negative indices.
 */

// Examples
// Basic Example
let arr = [10, 20, 30, 40, 50];
let element = arr.at(2);
console.log(element); // Output: 30

// Using Negative Indices
let arr1 = [10, 20, 30, 40, 50];
let element1 = arr1.at(-1);
console.log(element1); // Output: 50
// Here, arr.at(-1) returns the last element in the array, which is 50.

// Accessing the First Element
let arr2 = [10, 20, 30, 40, 50];
let element2 = arr2.at(0);
console.log(element2); // Output: 10
// In this example, arr.at(0) returns the first element in the array, which is 10.
