export const getNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

export const getChar = (): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
};

export const shuffleArr = (arr: any[]) => {
    let counter = arr.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;
      const temp = arr[counter];
      arr[counter] = arr[index];
      arr[index] = temp;
    }
    return arr;
};
