/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// var maxDepth = function (root) {
//   if (root === null) return 0;
//   let leftDepth = maxDepth(root.left) + 1;
//   let rightDepth = maxDepth(root.right) + 1;
//   return Math.max(leftDepth, rightDepth)
// };
var maxDepth = function (root) {
  let deepth = 0, queue = [];
  if (root === null) {
    return deepth;
  }
  queue.push(root);
  while (queue.length) {
    deepth++;
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return deepth;
};
// @lc code=end

