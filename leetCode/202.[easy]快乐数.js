/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const getN = (n) => {
  let res = 0;
  while (n !== 0) {
    res = res + (n % 10) * (n % 10);
    n = parseInt(n / 10);
  }
  return res;
}

var isHappy = function (n) {
  const set = new Set();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getN(n);
  }
  return n === 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isHappy;
// @after-stub-for-debug-end