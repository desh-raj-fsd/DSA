// Look back and Refactor

// Problem =>
// Write a function which takes in a string and return counts of each character in the string?

function charCount(str) {
  // make object to return at end.
  const res = {};
  // lowercase string.
  // loop over string. for each charcter...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter and is a key in object, add one to the count

    if (/[a-z0-9]/.test(char)) {
      res[char] = ++res[char] || 1;
      //   if (res[char] > 0) {
      //     res[char]++;
      //     // if the char is a number/letter and not in the object, add it and set value to 1
      //   } else {
      //     res[char] = 1;
      //   }
    }
  }
  // if char is something else (space, period, etc.) don't do anything
  // return object at end.

  return res;
}

console.log(charCount("This is my number 987654321"));
