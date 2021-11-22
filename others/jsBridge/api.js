const api = {
  openCamera: (ws, config) => {
    console.log("native内的方法", config);
    if (config.cb) {
      ws.send(config.cb);
    }
  }
}

module.exports = api;