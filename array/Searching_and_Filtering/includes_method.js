/**
 * The includes() method
 * The includes() method in JavaScript is used to determine whether an array includes a certain value among its entries. It returns true if the array contains the specified value, and false otherwise.
 * This method is case-sensitive when dealing with strings.
 *
 * Syntex
 * array.includes(valueToFind, fromIndex)
 *
 * Parameters
 * valueToFind: The value to search for within the array.
 * fromIndex (optional): The position in the array at which to begin the search. The default is 0. A negative value counts from the end of the array.
 *
 * Key Points
 * Returns Boolean: The includes() method returns true if the specified value is found in the array, and false otherwise.
 * Case-Sensitive: When searching for strings, the search is case-sensitive.
 * Search Position: You can specify the index to start the search with the fromIndex parameter.
 * Negative values count from the end of the array.
 * The includes() method is a straightforward and efficient way to check for the presence of an element in an array.
 */

// Examples
// Basic Example with Numbers
let arr = [1, 2, 3, 4, 5];
let includesThree = arr.includes(3);
console.log(includesThree); // Output: true

let includesTen = arr.includes(10);
console.log(includesTen); // Output: false

// Using fromIndex Parameter
let arr1 = [1, 2, 3, 4, 5];
let includesTwoFromIndex2 = arr1.includes(2, 2);
console.log(includesTwoFromIndex2); // Output: false
// In this example, includes(3) returns true because 3 is an element of the array, while includes(10) returns false because 10 is not in the array.

// Checking for Strings
let fruits = ["apple", "banana", "mango", "orange"];
let includesMango = fruits.includes("mango");
console.log(includesMango); // Output: true
// Here, the includes() method searches for 2 starting from index 2, so it returns false because 2 is before the specified index.

let includesGrape = fruits.includes("grape");
console.log(includesGrape); // Output: false
// In this example, includes('mango') returns true because mango is an element of the array, while includes('grape') returns false because grape is not in the array.

// Case Sensitivity
let words = ["Hello", "world"];
let includesHello = words.includes("Hello");
console.log(includesHello); // Output: true

let includeshello = words.includes("hello");
console.log(includeshello); // Output: false
// The method is case-sensitive, so includes('Hello') returns true, but includes('hello') returns false.
