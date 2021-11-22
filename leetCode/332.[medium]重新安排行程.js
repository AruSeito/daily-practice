/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let from2To = {}, res = ["JFK"];

  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    if (!from2To[from]) from2To[from] = [];
    from2To[from].push(to);
  }

  Object.keys(from2To).forEach(from => {
    from2To[from].sort();
  })

  const treeBack = () => {

    if (res.length === tickets.length + 1) return true;
    if (!from2To[res[res.length - 1]] || !from2To[res[res.length - 1]].length) {
      return false;
    }


    for (let i = 0; i < from2To[res[res.length - 1]].length; i++) {
      const city = from2To[res[res.length - 1]][i];
      from2To[res[res.length - 1]].splice(i, 1);
      res.push(city);
      if (treeBack()) return true;
      res.pop();
      from2To[res[res.length - 1]].splice(i, 0, city);
    }
  }
  treeBack();
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findItinerary;
// @after-stub-for-debug-end