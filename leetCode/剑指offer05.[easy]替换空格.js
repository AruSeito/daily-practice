var replaceSpace = function (s) {
  const strArr = Array.from(s);
  let spaceNum = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      spaceNum++;
    }
  }

  let left = strArr.length - 1, right = strArr.length + (2 * spaceNum) - 1;
  while (left >= 0) {
    if (strArr[left] !== " ") {
      strArr[right] = strArr[left];
      right--;
      left--;
    }
    else {
      strArr[right--] = "0";
      strArr[right--] = "2";
      strArr[right--] = "%";
      left--;
    }

  }
  return strArr.join("");
};