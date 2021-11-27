
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2);

  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex);

  const leftArray = mergeSort(left);
  const rightArray = mergeSort(right);

  let leftIndex = 0;
  let rightIndex = 0;
  let tmp = [];
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      tmp.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      tmp.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  if (leftIndex < leftArray.length) {
    tmp.push(...leftArray.slice(leftIndex))
  }
  if (rightIndex < rightArray.length) {
    tmp.push(...rightArray.slice(rightIndex))
  }

  return tmp;

}

const testArr = []
let i = 0
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}

console.log(mergeSort(testArr))