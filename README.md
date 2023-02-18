**Table of Contents**
- [Description](#description)
- [Utilities](#utilities)
  - [`isClass`](#isclass)
  - [`isFunction`](#isfunction)
  - [`isUrl`](#isurl)
  - [`isNumber`](#isnumber)
  - [`isNullOrUndefined`](#isnullorundefined)
  - [`fetchFiles`](#fetchfiles)
  - [`clamp`](#clamp)
  - [`pickRandom`](#pickrandom)
  - [`generateString`](#generatestring)

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

### `isNullOrUndefined`

Checks whether a value is `null` or `undefined`.

```js
isNullOrUndefined(null) // true
isNullOrUndefined(undefined) // true
isNullOrUndefined(1) // false
```

### `fetchFiles`

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
 * @param ignoreSubdirectories Include subdirectories
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

### `generateString`

Generates string from latin chars with numbers

```js
generateString(8) // BbLzLcN3
```

---
