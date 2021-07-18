function deepFreeze(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("obj必须是对象")
  }

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  })

  return Object.freeze(obj);
}