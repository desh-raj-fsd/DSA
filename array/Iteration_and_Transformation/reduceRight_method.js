/**
 * The reduceRight() method
 *
 * The reduceRight() method in JavaScript is similar to the reduce() method, but it processes the array elements from right to left (from the last element to the first).
 * This can be useful when the order of operations matters for your computation.
 *
 * Syntex
 * array.reduceRight(callback(accumulator, currentValue, index, array), initialValue)
 *
 * Parameters
 * callback: A function to execute on each element in the array, taking four arguments:
 * accumulator: The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
 * currentValue: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array reduceRight was called upon.
 * initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped. Calling reduceRight on an empty array without an initial value will throw a TypeError.
 *
 * Key Points
 * Processes Right to Left: The reduceRight() method processes array elements from right to left.
 * Returns a Single Value: It returns a single value that results from the reduction.
 * Uses an Accumulator: The method uses an accumulator to accumulate results.
 * Initial Value: Providing an initial value is important, especially when the array might be empty.
 * The reduceRight() method is a powerful tool for operations where the order of processing elements matters, especially in cases like concatenation or complex calculations.
 */

// Examples
// Concatenating Strings
let arr = ["a", "b", "c", "d"];
let result = arr.reduceRight((acc, cur) => acc + cur, "");
console.log(result); // Output: "dcba"
// In this example, the reduceRight() method concatenates the strings in the array from right to left, resulting in "dcba".

// Summing All Elements from Right to Left
let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduceRight((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 15
// Here, the reduceRight() method sums all the elements of the array, but it starts from the last element and works its way to the first.

// Flattening an Array of Arrays from Right to Left
let nestedArr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let flatArr = nestedArr.reduceRight((acc, cur) => acc.concat(cur), []);
console.log(flatArr); // Output: [4, 5, 2, 3, 0, 1]
// In this example, reduceRight() flattens the array of arrays, starting from the rightmost sub-array.
