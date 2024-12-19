/**
 * The reduce() method
 *
 * The reduce() method in JavaScript is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 * This method is extremely powerful for combining or accumulating array values based on a function you provide.
 *
 * Syntex
 * array.reduce(callback(accumulator, currentValue, index, array), initialValue)
 *
 * Parameters
 * callback: A function to execute on each element in the array, taking four arguments:
 * accumulator: The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
 * currentValue: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array reduce was called upon.
 * initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped. Calling reduce on an empty array without an initial value will throw a TypeError.
 *
 * Key Points
 * Returns a Single Value: The reduce() method returns a single value that results from the reduction.
 * Uses an Accumulator: The method uses an accumulator to accumulate results.
 * Initial Value: Providing an initial value is important, especially when the array might be empty.
 * The reduce() method is incredibly versatile and can be used for a wide range of operations, from summing numbers to transforming arrays into objects.
 */

// Examples
// Summing All Elements
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 15
// In this example, the reduce() method is used to sum all the elements of the array. The initial value is 0, and the callback adds each element to the accumulator.

// Flattening an Array of Arrays
let nestedArr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let flatArr = nestedArr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatArr); // Output: [0, 1, 2, 3, 4, 5]
// Here, reduce() is used to flatten an array of arrays into a single array.

// Counting Instances of Values in an Array
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let nameCount = names.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});
console.log(nameCount);
// Output: { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
// In this example, reduce() is used to count the occurrences of each name in the array.

// Grouping Objects by a Property
let people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 22 },
  { name: "Alice", age: 23 },
];
let groupedByName = people.reduce((acc, person) => {
  (acc[person.name] = acc[person.name] || []).push(person);
  return acc;
}, {});
console.log(groupedByName);
// Output: { Alice: [{ name: 'Alice', age: 21 }, { name: 'Alice', age: 23 }], Bob: [{ name: 'Bob', age: 22 }] }
// In this example, reduce() is used to group the array of people by their names.
