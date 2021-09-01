const fastSlowPoint = (array, target) => {
  let slow = 0,
    fast = 0;
  while (fast < array.length) {
    // 快指针与目标值比较
    if (array[fast] !== target) {
      // 相关操作，这里是交换位置
      // [array[slow], array[fast]] = [array[fast], array[slow]];
      slow++;
    }
    fast++;
  }
};

const leftRightPoint = (array, target) => {
  let left = 0,
    right = array.length;
  while (left < right) {
    // 左指针与目标值比较
    if (array[left] === target) {
      // 一系列操作。
      // array[left] = array[right - 1];
      right--;
    } else {
      left++;
    }
  }
};
