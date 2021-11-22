/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

/**
 * @solution
 * 滑动窗口：两个篮子相当于窗口容量，当满的时候，把最先放进去的拿出去
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let slow = 0, fast = 0, bucket = new Map(), res = 0;
  while (fast < fruits.length) {
    const value = bucket.get(fruits[fast]) ? bucket.get(fruits[fast]) + 1 : 1
    bucket.set(fruits[fast], value);
    while (bucket.size > 2) {
      const value = bucket.get(fruits[slow]);
      bucket.set(fruits[slow], value - 1);
      if (bucket.get(fruits[slow]) === 0) {
        bucket.delete(fruits[slow]);
      }
      slow++;
    }

    res = Math.max(res, fast - slow + 1);
    fast++;
  }
  return res;
};
// @lc code=end

