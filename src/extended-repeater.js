const { NotImplementedError } = require('../extensions/index.js');

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
  if (options === undefined) {
    return str;
  } else {
    let additionString = '';
    if (options.hasOwnProperty('addition')) {
      let addition = String(options.addition);
      let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes')
        ? options.additionRepeatTimes
        : 0;
      let additionSeparator = options.hasOwnProperty('additionSeparator')
        ? options.additionSeparator
        : '|';
      for (let i = 0; i < additionRepeatTimes - 1; i++) {
        additionString += addition + additionSeparator;
      }
      additionString += addition;
    }
    if (options.hasOwnProperty('repeatTimes')) {
      let separator = options.hasOwnProperty('separator')
        ? options.separator
        : '+';
      let repeatTimes = options.hasOwnProperty('repeatTimes')
        ? options.repeatTimes
        : 0;

      let strAndAddition = str + additionString;
      let result = '';
      for (let i = 0; i < repeatTimes - 1; i++) {
        result += strAndAddition + separator;
      }
      result += strAndAddition;
      return result;
    } else {
      return str + additionString;
    }
  }
}

module.exports = {
  repeater,
};
