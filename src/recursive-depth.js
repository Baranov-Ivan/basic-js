const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(Array.isArray(arr) === false) {
      return 0;
    }
    let height = 0;
    arr.forEach((item) => {
      height = Math.max(height,this.calculateDepth(item));
    });
    return height + 1;
  }
};