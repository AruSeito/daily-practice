/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

/**
 * @solution
 * 哈希表
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Object();
  for (let i = 0; i < strs.length; i++) {
    let charCodeSum = new Array(26).fill(0)
    for (let j = 0; j < strs[i].length; j++) {
      const pos = strs[i][j].charCodeAt() - "a".charCodeAt();
      charCodeSum[pos]++;
    }
    const key = charCodeSum.toString();
    map[key] ? map[key].push(strs[i]) : map[key] = [strs[i]]
  }
  return Object.values(map);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end