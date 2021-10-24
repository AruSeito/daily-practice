/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const queue = [], res = root;
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    let prevNode, curNode;
    for (let i = 0; i < length; i++) {
      if (i === 0) {
        prevNode = queue.shift();
        curNode = prevNode;
      } else {
        curNode = queue.shift();
        prevNode.next = curNode;
        prevNode = prevNode.next;
      }
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
    curNode.next = null;
  }
  return res;
};
// @lc code=end

