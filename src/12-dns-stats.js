/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  const subdom = domains.map((i) => i.split('.'));

  for (let i = 0; i < subdom.length; i++) {
    let subDns = '';
    const subKeys = [];

    for (let j = subdom[i].length - 1; j >= 0; j--) {
      subDns += `.${subdom[i][j]}`;
      subKeys.push(subDns);
    }

    for (let j = 0; j < subKeys.length; j++) {
      const domain = subKeys[j];
      if (domain in dns) {
        dns[domain]++;
      } else dns[domain] = 1;
    }
  }
  return dns;
}

module.exports = getDNSStats;
