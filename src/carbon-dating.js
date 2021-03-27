const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) { 
  if (typeof(sampleActivity) !== 'string') {
    return false;
  }
  
  

  sampleActivity = +sampleActivity;

  if (isNaN(sampleActivity)) {
    return false;
  }

  if (sampleActivity < 0 || sampleActivity > 15) {
    return false;
  }

  if (sampleActivity == 0) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const logN = Math.log(MODERN_ACTIVITY/sampleActivity);
  const age = logN/k;
  return Math.ceil(age);
}
