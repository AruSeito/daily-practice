function deepClone(value, hashMap = new WeakMap()) {
  if (value == undefined || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value);
  }

  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  const hashKey = hashMap.get(value);
  if (hashKey) {
    return hashKey;
  }


  const result = new value.constructor();
  hashMap.set(value, result);
  Object.keys(value).forEach((key) => {
    result[key] = deepClone(value[key], hashMap);
  })

  return result;
}