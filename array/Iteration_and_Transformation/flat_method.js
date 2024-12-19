/**
 * The flat() method
 * The flat() method in JavaScript is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * It helps in flattening nested arrays.
 *
 * Syntex
 * array.flat(depth)
 *
 * Parameters
 * depth (optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to 1 if not specified.
 *
 * Key Points
 * Creates a New Array: The flat() method returns a new array with the sub-array elements concatenated into it.
 * Does Not Modify Original Array: The original array is not modified.
 * Depth Control: You can specify how deep the flattening should go by providing the depth parameter. The default depth is 1.
 * The flat() method is very useful for working with nested arrays, making it easier to handle and manipulate array data.
 */

// Examples
let arr = [1, 2, [3, 4]];
let flatArray = arr.flat();
console.log(flatArray); // Output: [1, 2, 3, 4]
// In this example, the flat() method flattens the array one level deep, resulting in [1, 2, 3, 4].

// Flattening to Specified Depth
let arr1 = [1, 2, [3, 4, [5, 6]]];
let flatArray1 = arr1.flat(2);
console.log(flatArray1); // Output: [1, 2, 3, 4, 5, 6]
// Here, the flat() method flattens the array two levels deep, resulting in [1, 2, 3, 4, 5, 6].

// Flattening Deeply Nested Arrays
let arr2 = [1, [2, [3, [4, [5]]]]];
let flatArray2 = arr2.flat(Infinity);
console.log(flatArray2); // Output: [1, 2, 3, 4, 5]
// In this example, the flat() method flattens the array infinitely deep, resulting in a completely flat array [1, 2, 3, 4, 5].
