import _ from "lodash";

class TaskQueueStorableHelper {
  store = null;

  STORAGE_KEY = "report_task_store";

  // 单例模式
  static instance = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new TaskQueueStorableHelper();
    }
    return this.instance;
  }

  // 初始化
  constructor() {
    // 有缓存的话用缓存初始化
    const cacheData = localStorage.getItem(this.STORAGE_KEY);
    if (cacheData) {
      this.store = JSON.parse(cacheData);
    }
  }

  get queueData() {
    return this.store.queueData || [];
  }

  // 按照时间排序存到store里。
  set queueData(data) {
    const finalData = data.sort((a, b) => Number(a.timeStamp) - Number(b.timeStamp));
    this.store = {
      ...this.store,
      queueData: finalData
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.store))
  }
}


export class AsyncTaskQueue {
  // 获取排好序的任务队列实例
  get storableService() {
    return TaskQueueStorableHelper.getInstance();
  }

  // 获取queueData
  get queueData() {
    return this.storableService.queueData;
  }

  // 设置queueData
  set queueData(value) {
    this.storableService.queueData = value;
    // 使用方其实不关注你什么时候上报，只需要关注数据什么时候进去
    if (value.length) {
      this.debounceReport();
    }
  }

  /**
   * @override 如果封装成SDK给第三方使用的话，需要让用户自己重写这块。
   */
  consumeTaskQueue(data) { }


  // 上报
  debounceReport = _.debounce(this.report.bind(this), 1000);

  report() {
    const currentDataList = this.queueData;
    if (currentDataList.length) {
      // 严谨一点的话最好是上报成功之后再清空 或者 根据id来删除。
      // 这里简化一下
      this.queueData = [];
      this.consumeTaskQueue(currentDataList);
    }
  }

  addTask(data) {
    this.queueData = this.queueData.concat(data);
  }
}