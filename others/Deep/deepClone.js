function deepClone(value) {
  if (value == undefined || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value);
  }

  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  const result = new value.constructor();

  Object.keys(value).forEach((key) => {
    result[key] = deepClone(value[key]);
  })

  return result;
}