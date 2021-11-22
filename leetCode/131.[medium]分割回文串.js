/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
const isHuiWen = (s, start, end) => {
  let left = start, right = end;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
var partition = function (s) {
  const res = [], path = [];

  const treeBack = (startIndex) => {
    if (startIndex >= s.length) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      if (!isHuiWen(s, startIndex, i)) continue;
      path.push(s.substr(startIndex, i - startIndex + 1));
      treeBack(i + 1);
      path.pop();
    }
  }
  treeBack(0);
  return res;
};
// @lc code=end

