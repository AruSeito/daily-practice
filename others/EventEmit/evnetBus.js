class eventBus {
  constructor() {
    this.events = {};
  }

  emit(eventName, ...args) {
    const cb = this.events[eventName];
    if (!cb) {
      throw new Error("没这个事件啊");
    }

    cb.forEach((cb) => cb.apply(this, args));
    return this;
  }

  on(eventName, cb) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(cb);
    return this;
  }

  onOnce(eventName, cb) {
    const func = (...args) => {
      this.off(eventName, func);
      cb.apply(this, args);
    };
    this.on(eventName, func);
  }

  off(eventName, cb) {
    if (!cb) {
      this.events[eventName] = null;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this;
  }
}