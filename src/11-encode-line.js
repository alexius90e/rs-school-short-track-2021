/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  if (str === [...new Set(str.split(''))].join('')) {
    return str;
  }
  const res = [];
  let letter = '';
  let counter = 1;
  arr.forEach((el, index, array) => {
    if (index === 0) {
      letter = el;
    } else if (letter === el) {
      counter++;
      if (index === array.length - 1) {
        res.push(`${counter}${letter}`);
      }
    } else {
      // eslint-disable-next-line no-unused-expressions
      counter === 1 ? res.push(letter) : res.push(`${counter}${letter}`);
      letter = el;
      counter = 1;
      if (index === array.length - 1) {
        res.push(letter);
      }
    }
  });
  return res.join('');
}

module.exports = encodeLine;
