/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

/**
 * @solution
 * 思路：将指针向后移动一个，left和right同步减1，直到left相对于指针为1的时候再进行反转。left相对于指针为1的时候可以视为链表的前n个反转。
 * 
 * p   left      right
 * |    |          |
 * 1->  2   ->3-> 4   ->5 初始状态。
 * 
 *     p（left)   right
 *    ｜          |
 * 1->2->3->     4   ->5 ,p向右移动，left相对于头的位置减少1，right同理，当left和p重合时要处理的情况就变成了
 * 
 * p      end 
 * |     |
 * 2->3->4->5 ，要处理的。
 * 
 * 
 * 这个就等同于要处理2->3->4这个链表的整个反转。直接递归处理。
 * 保留好4->这个关系，处理好2->3->4整个链表的反转，再将反转后的最后一个节点的next指向5.
 * 
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let nextNode = null;
const reverseN = (head, n) => {
  if (n == 1) {
    nextNode = head.next;
    return head;
  }
  const last = reverseN(head.next, n - 1)
  head.next.next = head;
  head.next = nextNode;
  return last;
}

var reverseBetween = function (head, left, right) {
  if (left == 1) {
    return reverseN(head, right);
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
}
// @lc code=end

