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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = arr.slice();
  let discarded = false;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case '--discard-next':
        if (i == array.length - 1) {
          array.splice(i, 1);
          break;
        }
        array.splice(i, 2);
        discarded = true;
        i = i - 1;
        break;
      case '--discard-prev':
        if (i == 0 || discarded == true) {
          array.splice(i, 1);
          i = i - 1;
          break;
        }
        array.splice(i - 1, 2);
        i = i - 2;
        break;
      case '--double-next':
        if (i == array.length - 1) {
          array.splice(i, 1);
          break;
        }
        array.splice(i, 1, array[i + 1]);
        break;
      case '--double-prev':
        if (i == 0) {
          array.splice(i, 1);
          i = i - 1;
          break;
        }
        if (discarded == true) {
          array.splice(i, 1);
          i = i - 1;
          break;
        }
        array.splice(i, 1, array[i - 1]);
        break;
      default:
        discarded = false;
    }
  }

  return array;
}

module.exports = {
  transform,
};
