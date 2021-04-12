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
  const stack = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else if (count > 1) {
      stack.push(`${count}${arr[i]}`);
      count = 1;
    } else {
      stack.push(arr[i]);
    }
  }
  return stack.join('');
}

module.exports = encodeLine;
