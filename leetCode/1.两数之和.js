/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

/**
 *  @Solution
 *  类型：哈希表
 *  第一遍遍历数组，将数组中的每个值与目标值的差作为key，index作为value
 *  第二遍遍历数组，判断Map中是否有该值作为key的项，如果有判断value是否跟当前index相等，如果不想等就将当前index与map中的value放到result数组中
 *  更专业的题解：https://leetcode-cn.com/problems/two-sum/solution/tu-jie-guan-fang-tui-jian-ti-jie-liang-s-02xs/
 * /

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map(nums.map((num, index) => [target - num, index]));
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i]) && numMap.get(nums[i]) !== i) {
      result.push(numMap.get(nums[i]));
      result.push(i);
      break;
    }
  }
  return result;
};
// @lc code=end
