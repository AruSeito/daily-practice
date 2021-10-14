/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

/**
 * @solution
 * 哈希表
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], sMap.get(s[i]) ? sMap.get(s[i]) + 1 : 1)
  }
  for (let i = 0; i < t.length; i++) {
    sMap.set(t[i], sMap.get(t[i]) ? sMap.get(t[i]) - 1 : 1);
    if (sMap.get(t[i]) === 0) {
      sMap.delete(t[i]);
    }
  }
  return !sMap.size
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end