const sortStack = (nums) => {
  const stack = [], res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    res[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[i]);
  }
  return res;
}

sortStack([1, 2, 1]);