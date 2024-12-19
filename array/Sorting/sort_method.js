/**
 * The sort() method
 *
 * The sort() method in JavaScript sorts the elements of an array in place and returns the sorted array.
 * The default sort order is ascending, built upon converting the elements into strings and comparing their sequences of UTF-16 code units values.
 *
 * Syntex
 * array.sort(compareFunction)
 *
 * Parameters
 * compareFunction (optional): Specifies a function that defines the sort order. The function should take two arguments and return:
 * A negative value if the first argument should come before the second.
 * Zero if the two arguments are equal.
 * A positive value if the first argument should come after the second.
 *
 * Key Points
 * Modifies Original Array: The sort() method sorts the elements of the original array in place.
 * Default Sorting: The default sort order is ascending, based on converting elements to strings and comparing their sequences of UTF-16 code units values.
 * Compare Function: A custom compare function can be provided to define the sorting order.
 * The sort() method is a powerful tool for arranging array elements in a desired order, whether they are numbers, strings, or objects.
 */

// Examples
// Default Sorting
let arr = [3, 1, 4, 1, 5, 9];
arr.sort();
console.log(arr); // Output: [1, 1, 3, 4, 5, 9]
// In this example, the sort() method sorts the numbers as strings, resulting in the correct numerical order due to the single digits.

// Sorting with a Compare Function
let arr1 = [10, 2, 30, 4, 15];
arr1.sort((a, b) => a - b);
console.log(arr1); // Output: [2, 4, 10, 15, 30]
// Here, the sort() method uses a compare function to sort the numbers in ascending numerical order.

// Sorting Strings
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']
// In this example, the sort() method sorts the strings in alphabetical order by default.

// Sorting Strings with a Compare Function
let fruits1 = ["banana", "apple", "cherry"];
fruits1.sort((a, b) => b.localeCompare(a));
console.log(fruits1); // Output: ['cherry', 'banana', 'apple']
// Here, the sort() method sorts the strings in reverse alphabetical order using a compare function with localeCompare.

// Sorting Objects by Property
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// Output: [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ]
// In this example, the sort() method sorts an array of objects by the age property in ascending order.
