var ws = require("nodejs-websocket")

const wsServer = new ws.createServer((connect) => {
  connect.on("text", (e) => {
    console.log("我收到了", e)
  })
}).listen(8081)