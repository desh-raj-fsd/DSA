/**
 * copyWithin() method
 * The copyWithin() method in JavaScript is used to shallow copy a part of an array to another location in the same array without changing its length.
 * This method modifies the original array and returns it.
 *
 * Syntex
 * array.copyWithin(target, start, end)
 *
 * Parameters
 * target: The index at which to copy the sequence to. If negative, it is counted from the end.
 * start (optional): The index at which to start copying elements from. If omitted, it defaults to 0. If negative, it is counted from the end.
 * end (optional): The index at which to end copying elements (not inclusive). If omitted, it defaults to the array's length. If negative, it is counted from the end.
 */
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log("arr", arr); // Output: [4, 5, 3, 4, 5]
// In this example, the part of the array starting from index 3 ([4, 5]) is copied to the start of the array (index 0).

const dummyArr = [1, 2, 3, 4, 5];
dummyArr.copyWithin(0, 1, 3);
console.log("dummyArr", dummyArr); // Output: [2, 3, 3, 4, 5]
// Here, the elements from index 1 to 3 ([2, 3]) are copied to the start of the array (index 0).

let dummyArr1 = [1, 2, 3, 4, 5];
dummyArr1.copyWithin(-2, -3, -1);
console.log("dummyArr1", dummyArr1); // Output: [1, 2, 3, 3, 4]
// In this example, the elements from index -3 to -1 ([3, 4]) are copied to the position starting at index -2.
