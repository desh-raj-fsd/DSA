/**
 * concat() method
 * The concat() method in JavaScript is used to merge two or more arrays.
 * This method does not change the existing arrays but returns a new array containing the values of the combined arrays.
 * Syntex
 * let newArray = array1.concat(array2, array3, ..., arrayN);
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = arr1.concat(arr2);
console.log("mergedArray", mergedArray);

const arr3 = mergedArray.concat(7, 8, 9);
console.log("arr3", arr3);

const nestedArray = arr1.concat([arr2], [[7, 8, 9]]);
console.log("nestedArray", nestedArray);
