/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const copyArr = arr.slice();
  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] !== -1) delete copyArr[i];
  }

  const positiveArr = arr.filter((i) => i !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (copyArr[i] !== -1) {
      copyArr[i] = positiveArr.shift();
    } else copyArr[i] = -1;
  }
  return copyArr;
}

module.exports = sortByHeight;
