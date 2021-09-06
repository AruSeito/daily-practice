/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

/**
 * @solution
 * 计算公式：总结点=1+左节点个数+右节点个数。1是因为根节点也算一个节点
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
var countNodes = function (root) {
  if (root === null) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
