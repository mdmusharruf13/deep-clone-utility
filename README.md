# deep-clone-utility

## deepClone(params)

Recursively clones nested JavaScript objects and arrays without modifying the original data.  
For any non-object or primitive types (e.g., numbers, strings, `null`, `undefined`), the function will return `null`.

## Install

```bash
npm install deep-clone-utility
```

## Example

```js
const deepClone = require("deep-clone-utility");

// Example: Cloning an object
const original = { a: 1, b: { c: 2 } };
const duplicate = deepClone(original);

console.log(duplicate); // { a: 1, b: { c: 2 } }
console.log(original === duplicate); // false (they are different objects)
console.log(original.b === duplicate.b); // false (nested objects are also cloned)

// Example: Handling invalid input (non-object)
const invalid = deepClone(undefined);
console.log(invalid); // null

const invalidString = deepClone("hello");
console.log(invalidString); // null

const invalidNumber = deepClone(123);
console.log(invalidNumber); // null

const invalidNull = deepClone(null);
console.log(invalidNull); // null
```
