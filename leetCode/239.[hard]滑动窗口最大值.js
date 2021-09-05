/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

/**
 * @solution
 * 单调队列，可以套一下单调栈的模板，只不过要保证队首的永远是最大值，也就是说，在进一个新值之前先判断一下是否比前一个值大，如果比他大，那前面的值就要弹出来。在窗口满的时候出的时候要判断一下当前对头的值是否以及在进的时候被弹出去了，如果已经被弹出去了这里就不需要再出了。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [], slidingWindow = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      while (slidingWindow.length && nums[i] > slidingWindow[slidingWindow.length - 1]) {
        slidingWindow.pop();
      }
      slidingWindow.push(nums[i]);
    } else {
      while (slidingWindow.length && nums[i] > slidingWindow[slidingWindow.length - 1]) {
        slidingWindow.pop();
      }
      slidingWindow.push(nums[i]);
      res.push(slidingWindow[0]);
      if (slidingWindow[0] === nums[i - k + 1]) {
        slidingWindow.shift();
      }
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSlidingWindow;
// @after-stub-for-debug-end