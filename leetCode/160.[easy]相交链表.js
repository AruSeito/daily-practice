/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @solution
 * 思路1:有个map，A先走，把走过的节点都存到Map中，在走b跟map里的比对，空间复杂度是O（n）不符合题意
 * 思路2:双指针，A走到头让他换到B的头在走一遍，B同理，A,B指针相遇的点为相交的起始节点，因为这时两个走了相同的长度。
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let first = headA, second = headB;
  while (first !== second) {
    first = first ? first.next : null;
    second = second ? second.next : null;
    if (first === null && second === null) return null;
    if (first === null) first = headB
    if (second === null) second = headA;
  }
  return first;
};
// @lc code=end

