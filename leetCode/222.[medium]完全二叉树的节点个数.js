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
  // if (root === null) return 0;
  // return 1 + countNodes(root.left) + countNodes(root.right);
  if (root === null) return 0;
  const queue = []
  let sum = 0;
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      sum++;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return sum;
};
// @lc code=end
