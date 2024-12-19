/**
 * The toString() method
 *
 * The toString() method in JavaScript is used to convert an array, object, or other data types to a string representation.
 * It can be particularly useful for debugging or logging purposes.
 * This method is available for various types, including arrays, numbers, and objects.
 *
 * Syntex
 * array.toString()
 *
 * Key Points
 * Default Behavior: For arrays, the toString() method joins elements with a comma separator. For objects, it returns "[object Object]" by default.
 * Custom Implementation: You can override the toString() method for objects to provide a custom string representation.
 * Conversion Utility: The toString() method is useful for converting data types to strings for display, logging, or debugging purposes.
 * The toString() method is a simple yet powerful way to convert various data types to their string representations.
 */

// Examples
// Arrays
let arr = [1, 2, 3, 4, 5];
let str = arr.toString();
console.log(str); // Output: "1,2,3,4,5"
// In this example, the toString() method converts the array to a string with elements separated by commas.

// Numbers
let num = 123;
let numStr = num.toString();
console.log(numStr); // Output: "123"
// Here, the toString() method converts the number to its string representation.

// Objects
let obj = { name: "Alice", age: 25 };
let objStr = obj.toString();
console.log(objStr); // Output: "[object Object]"
// By default, the toString() method on objects returns "[object Object]", but it can be overridden to provide more meaningful output.

// Custom toString() Method for Objects

let user = {
  name: "Alice",
  age: 25,
  toString: function () {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};
console.log(user.toString()); // Output: "Name: Alice, Age: 25"
// In this example, the toString() method is overridden to provide a custom string representation of the user object.
