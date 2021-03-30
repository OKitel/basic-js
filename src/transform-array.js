module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let array = arr.slice();
  let discarded = false;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "--discard-next":
        if (i == array.length - 1) {
          array.splice(i, 1);
          break;
        }
        array.splice(i, 2);
        discarded = true;
        i = i - 1;
        break;
      case "--discard-prev":
        if (i == 0 || discarded == true) {
          array.splice(i, 1);
          i = i - 1;
          break;
        }
        array.splice(i - 1, 2);
        //discarded = true;
        i = i - 2;
        break;
      case "--double-next":
        if (i == array.length - 1) {
          array.splice(i, 1);
          break;
        }
        array.splice(i, 1, array[i + 1]);
        break;
      case "--double-prev":
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
};
