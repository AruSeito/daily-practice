/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [], path = [];

  const canUse = (str) => {
    if (str.length > 3 || parseInt(str) > 255) return false;
    if (str.length > 1 && str[0] === "0") return false;
    return true;
  }

  const treeBack = (startIndex) => {
    if (path.length > 4) return;
    if (path.length === 4 && startIndex === s.length) {
      if (canUse(path[path.length - 1])) res.push(path.join("."));
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      const subString = s.substr(startIndex, i - startIndex + 1);
      if (canUse(subString)) {
        path.push(subString);
        treeBack(i + 1);
        path.pop();
      } else { break; }
    }
  }

  treeBack(0);
  return res;
};
// @lc code=end

