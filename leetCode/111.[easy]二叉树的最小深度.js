/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  const queue = [];
  let deepth = 0;
  if (root === null) {
    return deepth;
  }
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    deepth++;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      if (!node.left && !node.right) {
        return deepth;
      }
    }
  }
  return deepth;
};
// @lc code=end

