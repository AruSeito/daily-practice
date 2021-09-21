/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

/**
 * @solution
 * 大数相加的思路，模拟一下就出来了。
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(), curr = dummy, carry = 0
  while (l1 || l2) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0

    const sum = x + y + carry
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    carry = Math.floor(sum / 10)

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry) curr.next = new ListNode(carry)
  return dummy.next
};
// @lc code=end

