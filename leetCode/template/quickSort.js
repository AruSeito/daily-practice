
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2) - 1;
  const midVal = arr.splice(midIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([midVal], quickSort(right))

}

const testArr = []
let i = 0
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}

console.log(quickSort(testArr))