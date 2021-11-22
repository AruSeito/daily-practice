const weight = [1, 3, 4]
const value = [15, 20, 30];
const bagWeight = 4;

// 根据前一个计算，当前取还是不取就可以了
const badgeTmp = (weight, value, bagWeight) => {
  const dp = new Array(weight.length).fill(0).map(() => new Array(bagWeight + 1).fill(0));

  for (let i = weight[0]; i <= bagWeight; i++) {
    dp[0][i] = value[0];
  }

  for (let i = 1; i < weight.length; i++) {
    for (let j = 0; j <= bagWeight; j++) {
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
    }
  }

  return dp[weight.length - 1][bagWeight];
}

badgeTmp(weight, value, bagWeight);