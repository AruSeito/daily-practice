/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || head === null) return head;
  let slow = head,
    fast = head,
    countNode = head,
    num = 0;
  while (countNode) {
    countNode = countNode.next;
    num++;
  }
  let realMove = k % num;
  if (realMove === 0) {
    return head;
  }
  while (realMove > 0) {
    fast = fast.next;
    realMove--;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  let result = slow.next;
  slow.next = null;
  fast.next = head;

  return result;
};
// @lc code=end
