const rand = {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

  getNumber: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
  
  getChar: function () {
    return this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length))
  }
};