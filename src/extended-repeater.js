const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof options.separator === "undefined") {
    options.separator = '+';
  }

  if(typeof options.additionSeparator === "undefined") {
    options.additionSeparator = '|';
  }

  let internalRepeater = '';
  if(Number.isInteger(options.additionRepeatTimes)) {
    for(let i = 0; i < options.additionRepeatTimes; i++) {
      if(i + 1 !== options.additionRepeatTimes) {
        internalRepeater = internalRepeater + String(options.addition) + options.additionSeparator;
      } else {
        internalRepeater = internalRepeater + String(options.addition);
      }
    }
  }

  let internalString = String(str) + internalRepeater;
  let finalString = '';
  if(Number.isInteger(options.repeatTimes)) {
    for(let i = 0; i < options.repeatTimes; i++) {
      if(i + 1 !== options.repeatTimes) {
        finalString = finalString + internalString + options.separator;
      } else {
        finalString = finalString + internalString;
      }
    }
  } else {
    return internalString + String(options.addition);
  }

  return finalString;
};
  