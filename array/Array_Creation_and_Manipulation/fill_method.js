/**
 * fill() method
 * The fill() method in JavaScript is used to fill all the elements of an array with a static value.
 * You can specify the start and end positions within the array to control where the filling occurs.
 * This method modifies the original array and returns it.
 * Syntex
 * array.fill(value, start, end)
 * Parameters
 * value: The value to fill the array with.
 * start (optional): The index to start filling (inclusive). Defaults to 0.
 * end (optional): The index to stop filling (exclusive). Defaults to the array's length.
 *
 * Key Points
 * Modifies Original Array: The fill() method modifies the original array.
 * Range Control: You can control the range of indices to be filled using the start and end parameters.
 * Negative Indices: Negative values for start and end are counted from the end of the array.
 */

// Examples
// The fill() method is useful for initializing or resetting arrays with specific values.
const array = new Array(10).fill(false);
console.log("array", array);

const arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log("arr", arr); // Output: [0, 0, 0, 0, 0]
// In this example, all elements of the array are filled with the value 0.

let arr1 = [1, 2, 3, 4, 5];
arr1.fill(0, 2);
console.log("arr1", arr1); // Output: [1, 2, 0, 0, 0]
// Here, the filling starts from index 2, filling the rest of the array with 0.

let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 1, 3);
console.log("arr2", arr2); // Output: [1, 0, 0, 4, 5]
// In this example, only the elements from index 1 to 3 (exclusive) are filled with 0.

let arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, -3, -1);
console.log("arr3", arr3); // Output: [1, 2, 0, 0, 5]
// Here, the elements from index -3 to -1 (exclusive) are filled with 0.
