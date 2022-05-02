const { NotImplementedError } = require('../extensions/index.js');

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
  depth = 1;
  calculateDepth(arr) {
    arr.forEach((item, index) => {
      if (Array.isArray(item)) {
        this.depth++;
        this.calculateDepth(item);
      }
      return this.depth;
    });
  }
}

module.exports = {
  DepthCalculator,
};
