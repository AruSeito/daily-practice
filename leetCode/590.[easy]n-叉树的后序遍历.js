/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function (root) {
  // 递归版
  // const res = [];
  // const dg = (root) => {
  //   if (root === null) return root;
  //   const children = root.children;
  //   for (let i = 0; i < children.length; i++) {
  //     dg(children[i]);
  //   }
  //   res.push(root.val);
  // }
  // dg(root);
  // return res;
  // 迭代
  const queue = [], res = [];
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const node = queue.pop();
    res.push(node.val);
    const children = node.children;
    for (let j = 0; j < children.length; j++) {
      queue.push(children[j]);
    }
  }
  return res.reverse();
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = postorder;
// @after-stub-for-debug-end