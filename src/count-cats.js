const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.flat(Infinity);
  let numberOfCats = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '^^') {
      numberOfCats += 1;
    }
  }
 return numberOfCats;

};
