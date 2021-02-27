const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let numberOfTurns = 2**diskNumber - 1;
  let numberOfSeconds = Math.floor((3600/turnsSpeed)*numberOfTurns);

  return {turns: numberOfTurns, seconds: numberOfSeconds}
};
