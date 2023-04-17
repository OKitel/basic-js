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
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const indexLast = domains[i].lastIndexOf('.');
    const dns1 = domains[i].slice(indexLast + 1);
    let result = 0;
    const dnsName = `.${dns1}`;
    for (let j = 0; j < domains.length; j++) {
      if (domains[j].endsWith(`.${dns1}`)) {
        result++;
      }
    }
    obj[dnsName] = result;
  }
  for (let i = 0; i < domains.length; i++) {
    const indexLast = domains[i].lastIndexOf('.');
    const indexMiddle = domains[i].lastIndexOf('.', indexLast - 1);
    const dns1 = domains[i].slice(indexLast + 1);
    const dns2 = domains[i].slice(indexMiddle + 1, indexLast);
    const dnsName = `.${dns1}.${dns2}`;
    let result = 0;
    for (let j = 0; j < domains.length; j++) {
      if (
        domains[j].endsWith(`.${dns2}.${dns1}`) ||
        domains[j] === `${dns2}.${dns1}`
      ) {
        result++;
      }
    }
    obj[dnsName] = result;
  }
  for (let i = 0; i < domains.length; i++) {
    let nextDot;
    const dot = domains[i].lastIndexOf('.');
    if (
      domains[i].lastIndexOf('.', dot - 1) >= 0 ||
      domains[i].lastIndexOf('.', dot - 1) !== -1
    ) {
      nextDot = domains[i].lastIndexOf('.', dot - 1);
    }
    if (domains[i].lastIndexOf('.', nextDot - 1) === -1) {
      const dns1 = domains[i].slice(dot + 1);
      const dns2 = domains[i].slice(nextDot + 1, dot);
      const dns3 = domains[i].slice(0, nextDot);
      const dnsName = `.${dns1}.${dns2}.${dns3}`;
      obj[dnsName] = 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
