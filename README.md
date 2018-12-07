# Extend random

## Basic usage

Import the package

```javascript
const rand = require('extend-random')
```

- Generate a random number

```javascript
rand.getNumber([min], [max]); // [randomNumber]
```

- Generate a random character from the alphabet

```javascript
rand.getChar(); // [randomCharacter]
```

- Shuffle a given array

```javascript
// Careful, it shuffles the SAME array that is passed
rand.shuffle([array]); // array
```