/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digitsArr = n.toString().split('');
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < digitsArr.length; i++) {
    let newDigits = digitsArr.slice(0, i).concat(digitsArr.slice(i + 1));
    let newNumber = Number(newDigits.join(''));
    if (newNumber > max) {
      max = newNumber;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
