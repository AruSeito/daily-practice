/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

/**
 * @solution
 * 哈希表
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const mMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    mMap.set(magazine[i], mMap.get(magazine[i]) ? mMap.get(magazine[i]) + 1 : 1)
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const chart = ransomNote[i]
    if (!mMap.has(chart)) {
      return false;
    }
    const count = mMap.get(chart);
    mMap.set(chart, count - 1);
    if (count - 1 === 0) {
      mMap.delete(chart);
    }
  }
  return true;
};
// @lc code=end

