/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function fillMap(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
      if (!map[str[i]]) {
        map[str[i]] = 1;
      } else {
        map[str[i]] += 1;
      }
    }
    return map;
  }

  let map1 = fillMap(s1);
  let map2 = fillMap(s2);

  let count = 0;
  for (let key in map1) {
    if (map2[key]) {
      count += Math.min(map1[key], map2[key]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
