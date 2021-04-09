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
  const stack = [];
  let c = n;
  c += '';
  c = c.split('');
  for (let i = 0; i < c.length; i++) {
    let b = c.slice();
    b.splice(i, 1);
    b = b.join('');
    stack.push(+b);
  }
  return Math.max(...stack);
}

module.exports = deleteDigit;
