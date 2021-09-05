/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

/**
 * @solution
 * 方法1:直接排序，然后去重，看去重后的数组长度，如果小于3，直接返回数组的最后一个。否则就返回长度-3个。
 * 方法2:三个指针。第三个指针没值就返回Math.max(third,first)。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 方法1
  // const sortNums = nums.sort((a, b) => a - b);
  // const array = Array.from(new Set(sortNums));
  // if (array.length < 3) return array[array.length - 1];
  // return array[array.length - 3]
  // 方法2
  const minNum = -2147483649
  let first = second = third = minNum;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    }
    else if (nums[i] > second && nums[i] < first) {
      third = second;
      second = nums[i];
    }
    else if (nums[i] > third && nums[i] < second) {
      third = nums[i];
    }
  }
  if (third > minNum) return third;
  return second > first ? second : first;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = thirdMax;
// @after-stub-for-debug-end