class BaseRouter {
  constructor() {
    this.routes = new Map();
    this.refresh = this.refresh.bind(this);
    this.route = this.route.bind(this);
    window.addEventListener("load", this.refresh);
    window.addEventListener("hashchange", this.refresh);
  }

  route(path, cb) {
    this.routes.set(path, cb);
  }

  refresh() {
    const path = `/${window.location.hash.slice(1) || ""}`;
    const cb = this.routes.get(path);
    if (path) {
      cb();
    }
  }

}


const router = new BaseRouter();

const body = document.body;

function changeBgColor(color) {
  body.style.backgroundColor = color;
}

router.route("/", () => {
  changeBgColor("white")
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