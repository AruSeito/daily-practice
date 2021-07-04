//三个状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  FULFILLED_CALLBACK_LIST = [];
  REJECTED_CALLBACK_LIST = [];
  _status = PENDING;

  constructor(fn) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    try {
      fn(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this.reject(e);
    }
  }

  get status() {
    return this._status;
  }

  set status(newStatus) {
    this._status = newStatus;
    switch (newStatus) {
      case FULFILLED:
        this.FULFILLED_CALLBACK_LIST.forEach(callback => {
          callback(this.value);
        })
        break;
      case REJECTED:
        this.REJECTED_CALLBACK_LIST.forEach(callback => {
          callback(this.reason);
        })
    }
  }

  isFunction(param) {
    return typeof param === "function"
  }

  isObject(param) {
    return typeof param === "object";
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
    }
  }

  then(onFulfilled, onRejected) {
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
      return value;
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
      throw reason;
    }


    const promise2 = new MyPromise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        })

      }

      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {

            const x = realOnRejected(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        })

      }
      switch (this.status) {
        case FULFILLED:
          fulfilledMicrotask();
          break;
        case REJECTED:
          rejectedMicrotask();
          break;
        case PENDING:
          this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask);
          this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask);
          break;
      }
    });
    return promise2;
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError("promise2和x不能相等"));
    }

    if (x instanceof MyPromise) {
      queueMicrotask(() => {
        x.then((y) => {
          this.resolvePromise(promise2, y, resolve, reject);
        }, reject)
      })

    } else if (this.isFunction(x) || this.isObject(x)) {
      if (x === null) {
        return resolve(x);
      }

      let then = null;

      try {
        then = x.then
      } catch (e) {
        return reject(e)
      }

      if (this.isFunction(then)) {
        let called = false;
        try {
          then.call(x, (value) => {
            if (called) return;
            called = true;
            this.resolvePromise(promise2, value, resolve, reject);
          }, (reason) => {
            if (called) return;
            called = true;
            reject(reason);
          })
        } catch (e) {
          if (called) return;
          reject(e);
        }
      } else {
        resolve(x);
      }
    } else {
      resolve(x);
    }
  }
}


module.exports = MyPromise;