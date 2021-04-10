/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const min = Math.min(...arr);
  const result = [];
  let counter = 0;
  arr.forEach((item) => {
    if (+item !== min) {
      result.push(+item);
    } else if (+item === min && counter === 0) {
      counter++;
    } else {
      result.push(+item);
    }
  });
  return +result.join('');
}

module.exports = deleteDigit;
