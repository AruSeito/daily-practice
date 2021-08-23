/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

/**
 * @Solution
 * 类型：数学问题
 * 思路一：默认都是相加，当当前数大于前一位时，减去2倍前一个值（一个是上一轮多加的，一个是这一轮两个相邻的实际值），例：MCMXCIV，先算M+C，然后因为第三个大于二位，所以先算CM 即 M-C.但是因为上一轮是计算的M+C，多加了一个C，所以要再减去一个C
 * 思路二：下一位大于当前位，当前位取反。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romaNumberMap = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
  // 解法1:
  const nums = s.split("");
  // let begin = romaNumberMap.get(nums[0]);
  // let result = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (romaNumberMap.get(nums[i]) > begin) {
  //     result = result + romaNumberMap.get(nums[i]) - 2 * begin;
  //   } else {
  //     result += romaNumberMap.get(nums[i]);
  //   }
  //   begin = romaNumberMap.get(nums[i]);
  // }
  // return result;
  // 解法2:
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (romaNumberMap.get(nums[i]) < romaNumberMap.get(nums[i + 1])) {
      result += (-1 * romaNumberMap.get(nums[i]));
      continue;
    }
    result += romaNumberMap.get(nums[i])
  }
  return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end