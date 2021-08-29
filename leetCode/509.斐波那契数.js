/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

/**
 * @solution
 * 方法一：递归下去。
 * 方法二：也是递归，不过因为方法一无脑递归下去会有很多重复计算，因此用Map记录一下所有的计算，重复的直接取
 * 方法三：迭代，跟递归其实一样的思路，不过是从底向上。
 * 方法四：方法三的优化，状态压缩，只缓存两个。
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 方法1:
  // if (n === 0 || n === 1) return n;
  // return fib(n - 1) + fib(n - 2);

  // 方法2:
  // const memoMap = new Map();
  // const recursion = (n) => {
  //   if (n === 0 || n === 1) return n;
  //   if (memoMap.has(n)) return memoMap.get(n);
  //   const result = recursion(n - 1) + recursion(n - 2);
  //   memoMap.set(n, result);
  //   return result
  // }
  // return recursion(n);

  // 方法3:
  // let memoTable = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   memoTable[i] = memoTable[i - 1] + memoTable[i - 2];
  // }
  // return memoTable[n];

  // 方法4:
  if (n === 0 || n === 1) return n;
  if (n === 2) return 1;
  let prev = 1, curr = 1;
  for (let i = 3; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};
// @lc code=end

