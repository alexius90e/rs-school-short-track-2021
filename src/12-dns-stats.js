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
  const stats = {};
  domains.forEach((domain) => {
    let currenDomain = '';
    domain.split('.').reverse().forEach((element) => {
      currenDomain += '.'.concat(element);
      if (stats[currenDomain]) {
        stats[currenDomain] += 1;
      } else {
        stats[currenDomain] = 1;
      }
    });
  });
  return stats;
}

module.exports = getDNSStats;
