import {initGlobalState} from "qiankun";

const initState = {
  userInfo:{
    userName:"张三",
    uid:"1"
  }
}

const actions = initGlobalState(initState);

actions.onGlobalStateChange((state,prevState)=>{
  console.log("主应用，变更前");
  console.log(prevState);
  console.log("主应用，变更后");
  console.log(state);
});

export default actions;