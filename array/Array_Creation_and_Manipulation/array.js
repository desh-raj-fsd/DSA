// There are four primary ways to create an array in JavaScript:

/**
 * Array Literals (Preferred)
 * The most common and simple way to create an array is by using square brackets ([]).
 * Syntax:
 * const array = [element1, element2, element3];
 */

//Examples
const array = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const fruits = ["Banana", "Apple", "Cherry"];
const mixed = ["Banana", 1, 3, null, undefined, true];

/**
 * Using the Array Constructor
 * The Array constructor allows you to create an array explicitly using the new keyword.
 * Syntax:
 * const array = new Array(element1, element2, element3);
 */

// Create an array with specified elements:
const numArr = new Array(10, 20, 30, 40);
console.log("numArr => ", numArr);

// Create an array with a specific length:
// Caution: When a single numeric value is passed, it sets the length of the array, not an element.
const arr1 = new Array(5);
console.log("arr1 => ", arr1);

/**
 * Using Array.of()
 * The Array.of() method creates an array from a set of arguments.
 * Unlike the Array constructor, it treats all arguments as elements, even a single numeric value.
 * Syntax:
 * const array = Array.of(element1, element2, element3);

 */
const arr2 = Array.of(1, 2, 3, 4, 5, 6);
console.log("arr2 => ", arr2);
const arr3 = Array.of(10);
console.log("arr3 => ", arr3);

/**
 * Using Array.from()
 * The Array.from() method creates an array from an iterable or array-like object (e.g., strings, NodeLists, or arguments object).
 * Syntax:
 * const array = Array.from(iterable, [mapFunction]);
 */

const chars = Array.from("Hello");
console.log("chars => ", chars);

// const elements = document.querySelectorAll("p");
// const paragraphs = Array.from(elements); // Converts NodeList to an array

const numbersArr = Array.from([1, 2, 3], (x) => x * 2); // [2, 4, 6]
console.log("numbersArr => ", numbersArr);

// Other Techniques (Special Use Cases)

/**
 * Spread Operator (...)
 * You can create a new array by spreading the elements of an existing iterable.
 */

const org = Array.of(1, 2, 3, 4, 5);
const newArr = [...org, ...new Array(6, 7, 8, 9)];
console.log("newArr =>", newArr);

/**
 * Using Object.keys(), Object.values(), or Object.entries()
 * These methods can create arrays from objects.
 */

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const keys = Object.keys(obj);
console.log("keys =>", keys);

const values = Object.values(obj);
console.log("values =>", values);

const entries = Object.entries(obj);
console.log("entries =>", entries);

/**
 * Empty Array Creation with []
 * You can create an empty array using [] or Array() for further population.
 */

const emptyArr1 = [];
const emptyArr2 = Array();
