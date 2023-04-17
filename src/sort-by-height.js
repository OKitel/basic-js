/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    return 0;
  }
  const minusOne = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      minusOne.push(i);
    }
  }
  arr.sort(compareNumeric);
  arr.splice(0, minusOne.length);
  for (let i = 0; i < minusOne.length; i++) {
    arr.splice(minusOne[i], 0, -1);
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
