/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === null || !date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();

  if (month === 11 || month <= 1) {
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
}

module.exports = {
  getSeason,
};
