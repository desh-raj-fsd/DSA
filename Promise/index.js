/**
 * Promise Methods in JavaScript
 *
 * A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation.
 * Promises are used to handle asynchronous operations more efficiently, avoiding callback hell and improving code readability.
 * Here is a summary of the commonly used Promise methods:
 *
 * Promise Creation and Resolution
 * Method                Description
 * new Promise()         Creates a new Promise object.
 * resolve()             Returns a Promise that is resolved with the given value.
 * reject()              Returns a Promise that is rejected with the given reason.
 *
 * Promise Composition
 * Method                Description
 * all()                 Returns a Promise that resolves when all of the promises in the iterable argument have resolved.
 * allSettled()          Returns a Promise that resolves after all of the given promises have either resolved or rejected.
 * any()                 Returns a Promise that resolves as soon as one of the promises in the iterable resolves.
 * race()                Returns a Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
 *
 * Promise Handling
 * Method                Description
 * then()                Adds fulfillment and rejection handlers to the promise, and returns a new promise.
 * catch()               Adds a rejection handler callback to the promise, and returns a new promise.
 * finally()             Adds a handler to be called when the promise is settled, regardless of its outcome.
 *
 * Additional Notes
 * - Promises are essential for handling asynchronous operations in modern JavaScript, making code more readable and maintainable.
 * - Using `async` and `await` can further simplify working with Promises.
 */
