const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, first = 1) {
    let totalDepth = first;
    for (let el of arr) {
      if (Array.isArray(el)) {
        let sum = this.calculateDepth(el, first + 1);
        if (sum > totalDepth) {
          totalDepth = sum;
        }
      }
    }
    return totalDepth;
  } 
};