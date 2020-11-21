export const formatter = new Intl.NumberFormat();

export const countInArray = (array, element) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  return count;
};
