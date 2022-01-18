class HistoryRouter {
  constructor() {
    // 保存path与cb的关系
    this.routes = new Map();
    // 绑定方法
    this.refresh = this.refresh.bind(this);
    this.route = this.route.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    // 监听事件
    window.addEventListener("load", this.refresh);
    window.addEventListener("popstate", this.pop);
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

  push(path){
    const cb = this.routes.get(path);
    cb && cb();
    history.pushState({},{},path);
  }

  pop(){
    const pathName = location.pathname;
    const cb = this.routes.get(pathName);
    cb && cb();
  }
}



const router = new HistoryRouter();

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

const handleClickLink = (e)=>{
  e.preventDefault();
  const pathName = new URL(e.target.href).pathname;
  router.push(pathName);
}

document.querySelector("#green").addEventListener("click", handleClickLink)
document.querySelector("#grey").addEventListener("click", handleClickLink)