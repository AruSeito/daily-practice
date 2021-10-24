/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
  // const mergeTwo = (left, right) => {
  //   if (!left || !right) return;
  //   left.next = right;
  //   mergeTwo(left.left, left.right);
  //   mergeTwo(right.left, right.right);
  //   mergeTwo(left.right, right.left);
  // }
  // if (!root) return null;
  // mergeTwo(root.left, root.right)
  // return root;
  const queue = [], res = root;
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    let preNode, curNode
    for (let i = 0; i < length; i++) {
      if (i === 0) {
        preNode = queue.shift();
        curNode = preNode;
      } else {
        curNode = queue.shift();
        preNode.next = curNode;
        preNode = curNode;
      }
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
    curNode.next = null;
  }
  return res;
};
// @lc code=end

