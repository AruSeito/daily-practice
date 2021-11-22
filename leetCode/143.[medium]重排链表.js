/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

/**
 * @solution
 * 1. 找到链表中点
 * 2. 反转后半段
 * 3. 按要求进行链表拼接
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

  // 找中点
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 反转链表
  let current = slow, prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // 拼接链表
  let result = head;
  let p1 = head, p2 = prev;
  while (p1) {
    const p1Next = p1.next;
    const p2Next = p2.next;
    p2.next = null;
    p1.next = p2;
    p1.next.next = p1Next;
    p1 = p1Next;
    p2 = p2Next;
  }
  return result;
};
// @lc code=end

