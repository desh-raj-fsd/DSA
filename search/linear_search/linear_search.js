"use strict"

/**
 * Linear Search Algorithm
 *
 * Linear Search is a straightforward searching technique used to find
 * a specific element in an array. It works by iterating through each
 * element in the array one by one, comparing each value to the target.
 * If the target is found, its index is returned; otherwise, -1 is returned.
 *
 * Time Complexity:
 * - Best Case: O(1) (when the target is the first element).
 * - Worst Case: O(n) (when the target is absent or at the end).
 *
 * Space Complexity: O(1)
 *
 * Example Usage:
 * const result = linearSearch([5, 3, 8, 6], 8);
 * console.log(result); // Output: 2
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i // Return index if found
    }
  }
  return -1 // Return -1 if not found
}

// Example usage
const array = [10, 20, 30, 40, 50]
const target = 30

const result = linearSearch(array, target)
if (result !== -1) {
  console.log(`Target found at index: ${result}`)
} else {
  console.log("Target not found.")
}
