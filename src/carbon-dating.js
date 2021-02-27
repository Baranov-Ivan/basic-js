const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  const RATE = 0.693 / HALF_LIFE_PERIOD;

  let sActivity = Number(sampleActivity);
  if (Number.isNaN(sActivity) || sActivity <= 0 || sActivity > MODERN_ACTIVITY) {
    return false;
  }

  let t = Math.log(MODERN_ACTIVITY / sActivity) / RATE;

  return Math.ceil(t);
};
