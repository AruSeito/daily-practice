/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
const getPath = (root, path, res) => {
  path.push(root.val);
  if (root.left === null && root.right === null) {
    let sPath = "";
    for (let i = 0; i < path.length - 1; i++) {
      sPath += path[i];
      sPath += "->"
    }
    sPath += path[path.length - 1];
    res.push(sPath);
    return;
  }
  if (root.left) {
    getPath(root.left, path, res);
    path.pop();
  }
  if (root.right) {
    getPath(root.right, path, res);
    path.pop();
  }
}
var binaryTreePaths = function (root) {
  const path = [], res = [];
  if (root === null) return res;
  getPath(root, path, res);
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = binaryTreePaths;
// @after-stub-for-debug-end