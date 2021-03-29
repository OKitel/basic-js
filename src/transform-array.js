const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let array = arr.slice();
  let discarded = false;
  let doubled = false;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case '--discard-next':
        if (i == array.length - 1 || discarded == true) {
          array.splice(i,1);
          break;
        }
        array.splice(i,2);
        discarded = true;
		i = i - 1;
        break;
      case '--discard-prev':
        if (i == 0 || discarded == true) {
          array.splice(i,1);
          break;
        }
        array.splice(i-1,2);
        discarded = true;
		i = i - 1;
        break;
      case '--double-next':
        if (i == array.length - 1) {
          array.splice(i,1);
          break;
        }
        array.splice(i,1,array[i+1]);
        doubled = true;
        break;
      case '--double-prev':
        if (i == 0) {
          array.splice(i,1);
          break;
        }
		  if (discarded == true) {
			array.splice(i,1);
			break;
		  }
      array.splice(i,1,array[i-1]);
       break;
        
    }
  }

  return array;
};
