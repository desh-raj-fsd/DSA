/**
 * The pop() method in JavaScript is used to remove the last element from an array and returns that element.
 * This method changes the length of the array.
 * Syntex
 * array.pop()
 *
 * Key Points
 * Modifies Original Array: The pop() method changes the length of the original array by removing the last element.
 * Returns Removed Element: The method returns the element that was removed from the array.
 * Empty Array: If the array is empty, calling pop() returns undefined.
 * The pop() method is useful for manipulating arrays by removing elements from the end.
 */
let arr = [1, 2, 3, 4, 5];
let lastElement = arr.pop();
console.log(arr); // Output: [1, 2, 3, 4]
console.log(lastElement); // Output: 5

// You can use pop() in a loop to remove all elements from an array:
while (arr.length > 0) {
  console.log(arr.pop());
}
console.log(arr); // Output: []
