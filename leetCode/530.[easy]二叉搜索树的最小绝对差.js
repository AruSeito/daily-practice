/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  const queue = [], arr = [];
  let cur = root, res = Number.MAX_SAFE_INTEGER;
  while (queue.length || cur) {
    if (cur) {
      queue.push(cur);
      cur = cur.left;
    } else {
      cur = queue.pop();
      arr.push(cur.val);
      cur = cur.right;
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    res = Math.min(res, Math.abs(arr[i] - arr[i + 1]))
  }
  return res;
};
// @lc code=end

