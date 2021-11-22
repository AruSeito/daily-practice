const ws = require("nodejs-websocket")
const Koa = require("koa")
const KoaStatic = require("koa-static")
const api = require("./api");


const parse = (url) => {
  const queryStart = url.indexOf("?");
  const api = url.slice(0, queryStart - 1).split(".");
  const apiName = api[api.length - 1];
  const query = url.slice(queryStart + 1, url.length).split("&");
  const queryObj = {};
  for (let i = 0; i < query.length; i++) {
    const keyAndName = query[i].split("=");
    queryObj[keyAndName[0]] = keyAndName[1];

  }

  return {
    apiName,
    query: queryObj
  }


}

const wsServer = new ws.createServer((connect) => {
  connect.on("text", (e) => {
    console.log("我收到了", e)
    const index = e.indexOf("jsbridge://");
    if (index !== -1) {
      console.log("是jsbridge的schema");
      const info = parse(e);
      // balabala一大串判断，然后往里面穿cb，里面按照cb穿过去就可以了
      api[info.apiName](connect, { cb: info.query.successcb });
      return;
    }
    // 如果不是就直接过

  })
  connect.on("close", (code, reason) => {
    console.log("Connection closed")
  })
  connect.on("error", (e) => {
    console.log("异常关闭", e)
  })
}).listen(8081)

const app = new Koa();

const staticServer = KoaStatic((__dirname + "/public"))

app.use(staticServer)
app.listen(8080, () => {
  console.log("koa start")
});