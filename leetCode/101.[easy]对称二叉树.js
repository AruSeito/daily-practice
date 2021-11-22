/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// const compare = (node1, node2) => {
//   if (node1 === null && node2 !== null) return false;
//   else if (node1 !== null && node2 === null) return false;
//   else if (node1 === null && node2 === null) return true;
//   else if (node1.val !== node2.val) return false;

//   const isSame1 = compare(node1.left, node2.right);
//   const isSame2 = compare(node1.right, node2.left);
//   return isSame1 && isSame2;

// }
// var isSymmetric = function (root) {
//   if (root === null) return true;
//   return compare(root.left, root.right);
// };

var isSymmetric = function (root) {
  if (root === null) return true;
  const queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (left === null && right === null) continue;
    if (left === null && right !== null) return false;
    else if (left !== null && right === null) return false;
    else if (left.val !== right.val) return false;
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
};
// @lc code=end

