export default rand = {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

  getNumber: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
  },

  getChar: function(){
    return this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length))
  },

  shuffle: function(array){
    let counter = array.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;
      const temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
};