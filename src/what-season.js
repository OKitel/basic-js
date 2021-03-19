const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  let time = date.getTime();
  let month = date.getMonth();
  
  if ((month == 11) || (month <= 1)) {
    return 'winter';
  }
  if (month <= 4) {
    return 'spring';
  }
  if (month <= 7) {
    return 'summer';
  }
  if (month <= 10) {
    return 'autumn';
  }
};
