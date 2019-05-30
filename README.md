# Extend random

## Basic usage

Import the package

```javascript
import { generateRandomNumber, generateRandomChar, shuffleArr } from 'extend-random';
```

- Generate a random number

```javascript
generateRandomNumber([min], [max]); // [randomNumber]
```

- Generate a random character from the alphabet

```javascript
generateRandomChar(); // [randomCharacter]
```

- Shuffle a given array

```javascript
// Careful, it shuffles the SAME array that is passed
shuffleArr([array]); // array
```
