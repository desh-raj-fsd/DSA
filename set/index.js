/**
 * Set Methods in JavaScript
 *
 * A Set in JavaScript is a collection of unique values, meaning a value can only occur once in a Set.
 * Sets are useful when you need to store a collection of unique values, or to quickly determine if a value is in a collection.
 * Here is a summary of the commonly used Set methods:
 *
 * Set Creation and Manipulation
 * Method                Description
 * new Set()             Creates a new Set object.
 * add()                 Adds a new element to the Set.
 * delete()              Removes an element from the Set.
 * clear()               Removes all elements from the Set.
 * has()                 Checks if an element is present in the Set.
 *
 * Iteration and Transformation
 * Method                Description
 * forEach()             Executes a provided function once for each value in the Set.
 * values()              Returns a new iterator object containing all the values in the Set.
 * keys()                Returns a new iterator object containing all the values in the Set (same as values()).
 * entries()             Returns a new iterator object containing all the [value, value] pairs for each element in the Set.
 * @@iterator()          Returns a new iterator object containing all the values in the Set (same as values()).
 *
 * Set and Array Conversion
 * Method                Description
 * Array.from()          Creates a new Array from a Set.
 * [...set]              The spread operator can be used to convert a Set into an Array.
 *
 * Additional Notes
 * - size: The `size` property returns the number of elements in a Set.
 * - Spread Syntax: You can use the spread operator `[...set]` to convert a Set to an Array.
 *
 * Example:
 * const set = new Set([1, 2, 3]);
 * console.log(set.size); // 3
 * const array = [...set];
 * console.log(array); // [1, 2, 3]
 *
 * - WeakSet: JavaScript also provides `WeakSet`, a variant of Set where objects are held weakly, and primitive values are not allowed.
 */
