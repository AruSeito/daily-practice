/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

/**
 * @solution
 * 方法一：递归。
 * 方法二：迭代，搞个栈代替递归。
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 方法一：
  if (head.next == undefined) return head;
  let lastHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return lastHead;


  // 方法二：
  // const stack = []
  // const resultHead = {
  //   val: undefined,
  //   next: null
  // }
  // let preHead = resultHead;
  // while (head) {
  //   stack.push({ ...head });
  //   head = head.next;
  // }
  // while (stack.length > 0) {
  //   preHead.next = stack.pop();
  //   preHead = preHead.next
  // }
  // preHead.next = null;
  // return resultHead.next;
};
// @lc code=end

