/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

/**
 * @solution
 * 单调栈直接套模板，不同的是循环数组里面的每个元素不光要跟自己后面的比大小，还要跟自己前面的比大小，所以直接给复制原来的数组*2，这样每个元素不光跟后面的比了，还跟自己前面的也比较到了。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [], res = [], tmpNums = [...nums, ...nums], length = nums.length;
  for (let i = tmpNums.length - 1; i >= 0; i--) {
    while (stack.length && tmpNums[i] >= stack[stack.length - 1]) {
      stack.pop()
    }
    res[i % length] = stack.length ? stack[stack.length - 1] : -1
    stack.push(tmpNums[i]);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = nextGreaterElements;
// @after-stub-for-debug-end