const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth();
  let day = date.getDate();
  if ((day >= 1 && month == 11) || (day <= 28 && month <= 1)) {
    return 'winter';
  }
  if ((day >= 1 && month == 2) || (day <= 31 && month <= 4)) {
    return 'spring';
  }
  if ((day >= 1 && month == 5) || (day <= 31 && month <= 7)) {
    return 'summer';
  }
  if ((day >= 1 && month == 8) || (day <= 30 && month <= 10)) {
    return 'autumn';
  }
};
