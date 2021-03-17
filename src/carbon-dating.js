const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) { 
  if (typeof(sampleActivity) == 'string') {
    if (sampleActivity > 0 && sampleActivity < 1000) { 
      if (!!sampleActivity) {
        sampleActivity = +sampleActivity;
        if (Number.isFinite(sampleActivity) == true) {
          let k = 0.693 / HALF_LIFE_PERIOD;
          let logN = Math.log(MODERN_ACTIVITY/sampleActivity);
          let age = logN/k;
          if (age < 0) {
            return false
          } else return Math.ceil(age);
        } else return false;
      }  else return false;
    } else return false;
  } else return false;
};
