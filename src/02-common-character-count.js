/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let copyS1 = s1;
  let copyS2 = s2;
  while (copyS1.length && copyS2.length) {
    if (copyS2.includes(copyS1.charAt(0))) {
      count++;
      copyS2 = copyS2.replace(copyS1.charAt(0), '');
      copyS1 = copyS1.slice(1);
    } else {
      copyS1 = copyS1.slice(1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
