const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let array = arr.slice();
  for (let i = 0; i < array.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i == array.length - 1) {
          array.splice(i,1);
          break;
        }
        array.splice(i,2);
      case '--discard-prev':
        if (i == 0) {
          array.splice(i,1);
          break;
        }
        array.splice(i-1,2);
      case '--double-next':
        if (i == array.length - 1) {
          array.splice(i,1);
          break;
        }
        array.splice(i,1,i+1);
      case '--double-prev':
        if (i == 0) {
          array.splice(i,1);
          break;
        }
        array.splice(i,1,i-1);
    }
  }

  return array;
};
