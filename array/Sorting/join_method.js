/**
 * The join() method
 *
 * The join() method in JavaScript is used to join all the elements of an array into a single string, with a specified separator between each element. If no separator is specified, a comma is used by default.
 *
 * Syntex
 * array.join(separator)
 *
 * Parameters
 * separator (optional): A string to separate each pair of adjacent elements in the array.
 * If omitted, the array elements are separated with a comma (,).
 * The separator can be a space, comma, dash, or any other string.
 *
 * Key PointsS
 * Returns a String: The join() method returns a single string with the array elements joined by the specified separator.
 * Default Separator: If no separator is specified, a comma is used as the default separator.
 * Flexible Separator: The separator can be any string, including spaces, commas, dashes, or even empty strings for concatenation.
 * The join() method is handy for creating readable strings from array elements, such as constructing sentences or formatting output.
 */

// Examples
// Basic Example
let arr = ["apple", "banana", "cherry"];
let result = arr.join();
console.log(result); // Output: "apple,banana,cherry"
// In this example, the join() method uses the default comma separator to join the array elements.

// Using a Custom Separator
let arr1 = ["apple", "banana", "cherry"];
let result1 = arr1.join(" - ");
console.log(result1); // Output: "apple - banana - cherry"
// Here, the elements of the array are joined with a dash and spaces as the separator.

// Joining Array with No Separator
let arr2 = ["a", "b", "c"];
let result2 = arr2.join("");
console.log(result2); // Output: "abc"\
// In this example, the join() method is used with an empty string as the separator, resulting in a concatenation of the array elements without any separator.

// Joining Array with Space Separator
let arr3 = ["I", "love", "JavaScript"];
let result3 = arr3.join(" ");
console.log(result3); // Output: "I love JavaScript"
// Here, the elements of the array are joined with a space between each word.
