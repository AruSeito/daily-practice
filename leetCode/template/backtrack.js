const result = [];

const backtrack = (path, selectList) => {
  if (满足条件) {
    result.push(path);
    return;
  }

  for (let i = 0; i < selectList.length; i++) {
    选择

    backtrack(path, selectList[i]);

    撤销选择
  }
}