/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
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
}

module.exports = {
  DepthCalculator,
};
