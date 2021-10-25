/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   if (p === null && q === null) return true;
//   if (p !== null && q === null) return false;
//   if (p === null & q !== null) return false;
//   if (p.val !== q.val) return false;
//   const isSame1 = isSameTree(p.left, q.left);
//   const isSame2 = isSameTree(p.right, q.right);
//   return isSame1 && isSame2;
// };
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  const queue = [];
  queue.push(p);
  queue.push(q);
  while (queue.length) {
    const node1 = queue.shift();
    const node2 = queue.shift();
    if (node1 === null && node2 === null) continue;
    if (node1 === null && node2 !== null) return false;
    if (node1 !== null && node2 === null) return false;
    if (node1.val !== node2.val) return false;
    queue.push(node1.left);
    queue.push(node2.left);
    queue.push(node1.right);
    queue.push(node2.right);
  }
  return true;
};
// @lc code=end

