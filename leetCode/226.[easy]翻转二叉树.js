/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

/**
 * @solution
 * 前序遍历，然后左右节点交换。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 深度优先（递归版）
  // if (root === null) return root;
  // const tmp = root.left;
  // root.left = root.right;
  // root.right = tmp;
  // invertTree(root.left);
  // invertTree(root.right);
  // return root;

  // 深度优先（迭代版）
  // const queue = [], res = root;
  // if (root === null) {
  //   return root;
  // }
  // queue.push(root);
  // while (queue.length) {
  //   const node = queue.pop();
  //   const tmp = node.left;
  //   node.left = node.right;
  //   node.right = tmp;
  //   node.right && queue.push(node.right);
  //   node.left && queue.push(node.left);
  // }
  // return res;

  // 广度优先
  const queue = [], res = root;
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      const tmp = node.left;
      node.left = node.right;
      node.right = tmp;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = invertTree;
// @after-stub-for-debug-end