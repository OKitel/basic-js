/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  str += '';
  if (typeof options.addition == 'undefined') {
    options.addition = '';
  }
  options.addition += '';
  if (typeof options.repeatTimes == 'undefined') {
    options.repeatTimes = 1;
  }
  if (typeof options.additionRepeatTimes == 'undefined') {
    options.additionRepeatTimes = 0;
  }
  if (typeof options.separator == 'undefined') {
    options.separator = '+';
  }
  if (typeof options.additionSeparator == 'undefined') {
    options.additionSeparator = '|';
  }

  let addRep = options.additionRepeatTimes;

  if (addRep == 0) {
    addRep = 1;
  } else if (addRep > 1) {
    addRep--;
  }

  let addPlusSep = '';
  if (options.additionRepeatTimes > 1) {
    addPlusSep = options.addition + options.additionSeparator;
  }
  let addition = addPlusSep.repeat(addRep) + options.addition;
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str + addition + options.separator;
  }
  let separator1 = options.separator;
  let sepLength = separator1.length;
  let resLength = result.length;
  let needLength = resLength - sepLength;
  return result.slice(0, needLength);
}

module.exports = {
  repeater,
};
