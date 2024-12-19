/**
 * The shift() method
 * The shift() method in JavaScript is used to remove the first element from an array and returns that removed element.
 * This method changes the length of the array and shifts the remaining elements to a lower index.
 * Syntex
 * array.shift()
 *
 * Key Points
 * Modifies Original Array: The shift() method changes the length of the original array by removing the first element.
 * Returns Removed Element: The method returns the element that was removed from the array.
 * Empty Array: If the array is empty, calling shift() returns undefined.
 * The shift() method is particularly useful for queue-like data structures where you need to process elements in a first-in, first-out (FIFO) order.
 */

// Examples

let arr = [1, 2, 3, 4, 5];
let firstElement = arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]
console.log(firstElement); // Output: 1

// You can use shift() in a loop to remove all elements from an array:
while (arr.length > 0) {
  console.log(arr.shift());
}
console.log(arr); // Output: []
