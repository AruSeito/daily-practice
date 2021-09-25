/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

/**
 * @solution
 * 快慢指针：先数出来有几个节点，然后求出来相对于原来的图形实际走的步数（n）。如果实际走0步，那就是他本身，相当于旋转了一圈。如果不为0，快指针先走n步，慢指针再走，直到快指针走到头。这时候慢指针指向的应该是最后一个节点，快指针指向的是要接到头上的。一顿操作结束。
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
