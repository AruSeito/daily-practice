/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

/**
 * @solution
 * 解法一：纵向扫描 ，比较相同位置的字符串是否相同，如果不相同则当前列就不是了
 * 解法二：横向扫描，两两比对，
 */
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs == undefined || strs.length === 0) {
    return "";
  }
  // 解法一：
  // const charCount = strs[0].length;
  // const strNum = strs.length;
  // for (let i = 0; i < charCount; i++) {
  //   const char = strs[0][i];
  //   for (let j = 1; j < strNum; j++) {
  //     if (i === strs[j].length || strs[j][i] !== char) {
  //       return strs[0].substring(0, i);
  //     }
  //   }
  // }
  // return strs[0];

  // 解法二：
  let str = strs[0];
  const strNum = strs.length;
  for (let i = 1; i < strNum; i++) {
    const chartCount = strs[i].length;
    const length = Math.max(str.length, chartCount);
    for (let j = 0; j < length; j++) {
      if (j >= chartCount || str[j] !== strs[i][j]) {
        str = strs[i].substring(0, j);
        break;
      }
    }
  }
  return str;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end
