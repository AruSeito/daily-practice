/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1, end = n, mid = parseInt((n + 1) / 2);
        while (start <= end) {
            if (isBadVersion(mid)) {
                end = mid - 1;
                mid = parseInt((start + end) / 2)
            } else {
                start = mid + 1;
                mid = parseInt((start + end) / 2)
            }
        }
        return start;
    };
};
// @lc code=end

