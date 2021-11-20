/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
  const postOrder = (node) => {
    if (node === null) return [0, 0];

    const left = postOrder(node.left);
    const right = postOrder(node.right);

    const currentDo = node.val + left[0] + right[0];
    const currentNotDo = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [currentNotDo, currentDo];
  }

  const res = postOrder(root);

  return Math.max(...res);
};
// @lc code=end

