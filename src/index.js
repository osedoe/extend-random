"use strict";
exports.__esModule = true;
exports.generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.generateRandomChar = function () {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
};
exports.shuffleArr = function (arr) {
    var counter = arr.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
};
