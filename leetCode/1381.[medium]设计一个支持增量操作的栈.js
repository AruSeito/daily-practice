/*
 * @lc app=leetcode.cn id=1381 lang=javascript
 *
 * [1381] 设计一个支持增量操作的栈
 */

/**
 * @solution
 * 栈的基本操作。
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = new Array(maxSize);
  this.maxSize = maxSize;
  this.index = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.index < this.maxSize) {
    this.stack[this.index++] = x;
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.index !== 0) {
    return this.stack.splice(--this.index, 1)
  }
  return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < this.index && k > 0; i++, k--) {
    this.stack[i] = this.stack[i] + val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end

