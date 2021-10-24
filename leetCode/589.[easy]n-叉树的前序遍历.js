/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 递归版
  // const res = [];
  // const dg = (root) => {
  //   if (root === null) return root;
  //   res.push(root.val);
  //   const children = root.children;
  //   for (let i = 0; i < children.length; i++) {
  //     dg(children[i]);
  //   }
  // }
  // dg(root);
  // return res;

  // 迭代版
  const queue = [], res = [];
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.pop();
      res.push(node.val);
      const children = node.children;
      const childrenLength = children.length;
      for (let i = childrenLength - 1; i >= 0; i--) {
        queue.push(children[i]);
      }
    }
  }
  return res;
};
// @lc code=end

