/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

/**
 * @solution
 * 哈希表
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let inSetArray = [], otherArray = [];
  if (nums1.length > nums2.length) {
    inSetArray = nums1;
    otherArray = nums2;
  } else {
    inSetArray = nums2;
    otherArray = nums1;
  }
  let maps = new Map();

  for (let i = 0; i < inSetArray.length; i++) {
    const key = inSetArray[i];
    maps.set(key, maps.get(key) ? maps.get(key) + 1 : 1)
  }
  let res = [];
  for (let i = 0; i < otherArray.length; i++) {
    const key = otherArray[i]
    if (maps.has(key)) {
      res.push(key)
      let value = maps.get(key) - 1
      maps.set(key, value)
      if (value === 0) {
        maps.delete(key);
      }
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intersect;
// @after-stub-for-debug-end