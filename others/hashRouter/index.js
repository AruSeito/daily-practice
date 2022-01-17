class BaseRouter {
  constructor() {
    // 保存path与cb的关系
    this.routes = new Map();
    // 绑定方法
    this.refresh = this.refresh.bind(this);
    this.route = this.route.bind(this);
    // 监听事件
    window.addEventListener("load", this.refresh);
    window.addEventListener("hashchange", this.refresh);
  }

  // 注册路由
  route(path, cb) {
    this.routes.set(path, cb);
  }

  // hash改变时执行的动作
  refresh() {
    const hash = window.location.hash;
    const path = hash.slice(1) || "/"
    if (path) {
      const cb = this.routes.get(path);
      cb && cb();
    }
  }
}



const router = new BaseRouter();

const body = document.body;

function changeBgColor(color) {
  body.style.backgroundColor = color;
}

router.route("/", () => {
  changeBgColor("red")
})
router.route("/blue", () => {
  changeBgColor("blue")
})
router.route("/grey", () => {
  changeBgColor("grey")
})
router.route("/green", () => {
  changeBgColor("green")
})