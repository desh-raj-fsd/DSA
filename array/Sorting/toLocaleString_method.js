/**
 * The toLocaleString() method
 *
 * The toLocaleString() method in JavaScript is used to convert an array to a string, with array elements separated by a locale-specific string (usually a comma ,).
 * This method can also be used to format numbers, dates, and more in a locale-aware manner.
 *
 * Syntex
 * array.toLocaleString(locales, options)
 *
 * Parameters
 * locales (optional): A string with a BCP 47 language tag, or an array of such strings. For example, 'en-US' for American English.
 * options (optional): An object with configuration properties that vary based on the type of object being formatted (e.g., Date, Number).
 *
 * Key Points
 * Locale-Sensitive: toLocaleString() converts an array or other objects to a string with locale-sensitive formatting.
 * Customizable: The method accepts optional locales and options parameters to control the formatting.
 * Versatile: Useful for formatting numbers, dates, and arrays in a locale-aware manner.
 * The toLocaleString() method is a versatile tool for producing localized representations of numbers, dates, and arrays.
 */

// Examples
// Basic Array Example
let arr = [1000, 2000, 3000];
let result = arr.toLocaleString();
console.log(result); // Output: "1,000,2,000,3,000" (may vary based on locale)
// In this example, toLocaleString() converts the array elements to a string separated by commas, formatted according to the default locale.

// Using Locales with Numbers
let number = 1234567.89;
let usFormat = number.toLocaleString("en-US");
let deFormat = number.toLocaleString("de-DE");
let inFormat = number.toLocaleString("en-IN"); // Indian format
console.log(usFormat); // Output: "1,234,567.89"
console.log(deFormat); // Output: "1.234.567,89"
console.log(inFormat); // Output: "12,34,567.89" // Indian format
// Here, the toLocaleString() method formats the number according to different locales. The US format uses commas for thousands and a dot for decimals, while the German format uses dots for thousands and a comma for decimals.

// Using Options with Numbers
let number1 = 1234567.89;
let options = { style: "currency", currency: "USD" };
let indOptions = { style: "currency", currency: "INR" };
let currencyFormat = number1.toLocaleString("en-US", options);
let indCurrencyFormat = number1.toLocaleString("en-IN", indOptions);
console.log(currencyFormat); // Output: "$1,234,567.89"
console.log(indCurrencyFormat); // Output: "₹12,34,567.89"
// In this example, toLocaleString() formats the number as a currency (USD) with locale-specific conventions.

// Using Locales with Dates
let date = new Date();
let usDate = date.toLocaleString("en-US");
let frDate = date.toLocaleString("fr-FR");
let inDate = date.toLocaleString("en-IN");
console.log(usDate);
console.log(frDate);
console.log(inDate);
// Here, toLocaleString() formats the date according to different locales. The US format uses month/day/year, while the French format uses day/month/year.
