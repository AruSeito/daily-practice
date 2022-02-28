import { AsyncTaskQueue } from "./async-task-queue";
import axios from "axios";
import { stringify } from "query-string"
import { v4 as uuid } from 'uuid';


export class BaseTrack extends AsyncTaskQueue {
  seq = 0;
  consumeTaskQueue(data) {
    return axios.post("https://www.baidu.com", data);

    // return new Promise(resolve => {
    //   const image = new Image();
    //   image.onload = () => {
    //     resolve(true);
    //   }
    //   image.src = `https://www.baidu.com?${stringify(data)}`
    // })
  }

  track(data) {
    this.addTask({
      id: uuid(),
      // 验证数据是否完整。
      seqId: this.seq++,
      timestamp: Date.now(),
      ...data
    });
  }
}