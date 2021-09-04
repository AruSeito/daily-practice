/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */
/**
 * @solution
 * 单调栈：按身高排队的想法，如果前面比他高，他就出去，然后以当前值为key，栈顶为value进行存储，栈为空就是没有比他大的就返回-1；
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const mapHelper = new Map();

  const stack = [], res = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    mapHelper.set(nums2[i], stack.length ? stack[stack.length - 1] : -1)
    stack.push(nums2[i]);
  };
  for (let i = 0; i < nums1.length; i++) {
    res.push(mapHelper.get(nums1[i]))
  }
  return res
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nextGreaterElement;
// @after-stub-for-debug-end