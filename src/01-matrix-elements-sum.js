/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const size = matrix[0].length;
  let res = 0;
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] !== 0) {
        res += matrix[i][j];
      } else {
        break;
      }
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
