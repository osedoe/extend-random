# Extend random

## Basic usage

Import the package

```javascript
const rand = require('extend-random')
```

- Generate a random number

```javascript
getNumber([min], [max]); // [randomNumber]
```

- Generate a random character from the alphabet

```javascript
getChar(); // [randomCharacter]
```

- Shuffle a given array

```javascript
// Careful, it shuffles the SAME array that is passed
shuffleArr([array]); // array
```