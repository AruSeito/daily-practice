/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = [], res = [];
  if (root == null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const length = queue.length, cur = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      cur.push(node.val);
      const childLength = node.children.length;
      for (let j = 0; j < childLength; j++) {
        queue.push(node.children[j]);
      }
    }
    res.push(cur);
  }
  return res;
};
// @lc code=end

