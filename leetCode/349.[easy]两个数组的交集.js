/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let inSetArray = [], otherArray = [];
  if (nums1.length > nums2.length) {
    inSetArray = nums1;
    otherArray = nums2;
  } else {
    inSetArray = nums2;
    otherArray = nums1;
  }
  let sets = new Set(inSetArray);
  let res = new Set();
  for (let i = 0; i < otherArray.length; i++) {
    if (sets.has(otherArray[i])) {
      res.add(otherArray[i])
    }
  }
  return Array.from(res);

};
// @lc code=end

