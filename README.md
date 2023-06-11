**Table of Contents**
- [Description](#description)
- [Utilities](#utilities)
  - [`isClass`](#isclass)
  - [`isFunction`](#isfunction)
  - [`isUrl`](#isurl)
  - [`isNumber`](#isnumber)
  - [`isObject`](#isobject)
  - [`isNullOrUndefined`](#isnullorundefined)
  - [`isNullOrUndefinedOrEmpty`](#isnullorundefinedorempty)
  - [`isNullOrUndefinedOrZero`](#isnullorundefinedorzero)
  - [`fetchFiles`](#fetchfiles-commonjs)
  - [`clamp`](#clamp)
  - [`pickRandom`](#pickrandom)
  - [`chunk`](#chunk)
  - [`flatten`](#flatten)
  - [`generateString`](#generatestring)
  - [`cleanObject`](#cleanobject)
  - [`sleep`](#sleep)

## Description

This is a library with common functions to help with programming.<br>
I got tired of moving utilities from one project to another, so I made this library.

---

## Utilities

### `isClass`

Verifies if the input is a class constructor.

```js
class A {}

isClass(A) // true
isClass(function () {}) // false
```

### `isFunction`

Verifies if the input is a function.

```js
isFunction(function () {}) // true
isFunction('foo') // false
```

### `isUrl`

Verifies if the input string is a valid url

```js
isUrl('https://example.com') // true
isUrl('100PercentNotUrl') // false
```

### `isNumber`

Verifies if a number is a finite number.

```js
isNumber(10) // true
isNumber('10') // false
```

### `isObject`

Verify if the input is an object literal (or class).

```js
isObject({}) // true
isObject([]) // true
isObject('foo') // false
```

### `isNullOrUndefined`

Checks whether a value is `null` or `undefined`.

```js
isNullOrUndefined(null) // true
isNullOrUndefined(undefined) // true
isNullOrUndefined(1) // false
```

### `isNullOrUndefinedOrEmpty`

Checks whether or not a value is `null`, `undefined` or `''`, `[]`

```js
isNullOrUndefinedOrEmpty('') // true
isNullishOrEmpty('') // true
```

### `isNullOrUndefinedOrZero`

Checks whether or not a value is `null`, `undefined` or `0`

```js
isNullOrUndefinedOrZero(0) // true
isNullishOrZero(0) // true
```

### `fetchFiles [CommonJS]`

Fetches file paths from a directory

```
.
└── root/
    └── images/
        ├── jpeg/
        │   └── 01.jpeg
        └── 01.png
```

```js
/**
 * @param dir Directory with files
 * @param includeSubdirectories Include subdirectories
 */

fetchFiles('/root/images') // ['/root/images/01.png']
isNullOrUndefined('/root/images', true) // ['/root/images/01.png', '/root/images/jpeg/01.jpeg']
```

### `clamp`

Limiting number by min and max values

```js
clamp(15, 1, 13) // 13
clamp(3, 5, 10) // 5
clamp(7, 0, 100) // 7
```

### `pickRandom`

Picks a random element from an array

```js
pickRandom([0, 1, 2, 3, 4, 5]) // 3
pickRandom([0, 1, 2, 3, 4, 5], 2) // [3, 0]
```

### `chunk`

Splits an array into smaller arrays of a specified size

```js
chunk([1000, 7, 993, 7], 2) // [[1000, 7], [993, 7]]
```

### `flatten`

Flattens a nested array (i.e., an array of arrays) into a single-level array

```js
flatten([[1, 2, 3], [9, 9, 3]]) // [1, 2, 3, 9, 9, 3]
```

### `generateString`

Generates string from latin chars with numbers

```js
generateString(8) // BbLzLcN3
```

### `cleanObject`

Clean undefined and null values from object

```js
cleanObject({ foo: 'bar', nullish: null }) // { foo: 'bar' }
```

### `sleep`

```js
await sleep(1000) // Sleep 1 second
```

---
