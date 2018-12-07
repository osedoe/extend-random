exports.getNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

exports.getChar = function () {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length))
}

exports.shuffleArr = function(arr){
    let counter = arr.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;
      const temp = arr[counter];
      arr[counter] = arr[index];
      arr[index] = temp;
    }
    return arr;
}