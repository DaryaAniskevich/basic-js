const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [...arr];
    newArr.forEach((elem, index, array) => {
      if (elem === '--discard-next') {
        if (index === array.length - 1) {
          newArr.splice(index, 1);
        } else {
          newArr.splice(index, 2, 'phrase');
        }
      } else if (elem === '--discard-prev') {
        if (index === 0) {
          newArr.splice(index, 1);
        } else {
          if (array[index - 1]) {
            newArr.splice(index - 1, 2, 'phrase');
          } else {
            newArr.splice(index, 1);
          }
        }
      } else if (elem === '--double-next') {
        if (index === array.length - 1) {
          newArr.splice(index, 1);
        } else {
          newArr[index] = newArr[index + 1];
        }
      } else if (elem === '--double-prev') {
        if (index === 0) {
          newArr.splice(index, 1);
        } else {
          newArr[index] = newArr[index - 1];
        }
      }
    });
    return newArr.filter((item) => item !== 'phrase');
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
