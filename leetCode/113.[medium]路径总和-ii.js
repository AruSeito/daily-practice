/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
const getPath = (node, count, res, path) => {
  if (node.left === null && node.right === null && count === 0) {
    res.push([...path]); // 可能翻车，一定要深拷贝，前几次就是在这翻车了
    return;
  }
  if (node.left) {
    path.push(node.left.val);
    getPath(node.left, count - node.left.val, res, path);
    path.pop();
  }
  if (node.right) {
    path.push(node.right.val);
    getPath(node.right, count - node.right.val, res, path);
    path.pop();
  }
  return;

}
var pathSum = function (root, targetSum) {
  const res = [], path = [];
  if (root === null) return res;
  path.push(root.val);
  getPath(root, targetSum - root.val, res, path);
  return res;
};
// @lc code=end

