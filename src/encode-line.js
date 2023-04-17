/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return str;
  }
  const arr = str.split('');
  const result = [];
  let n = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      n++;
    }
    if (arr[i] !== arr[i - 1]) {
      if (n !== 1) {
        result.push(`${n}${arr[i - 1]}`);
      } else {
        result.push(`${arr[i - 1]}`);
      }
      n = 1;
    }
    if (i === arr.length - 1) {
      if (n !== 1) {
        result.push(`${n}${arr[i]}`);
      } else {
        result.push(`${arr[i]}`);
      }
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine,
};
