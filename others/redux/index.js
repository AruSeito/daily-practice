// 订阅发布模式
function createStore(reducer){
  let state;
  let listeners = [];

  const getState = ()=>{
    return state;
  }

  const dispatch = (action)=>{
    state = reducer(state,action);
    listeners.forEach((listener=>listener()));
  }

  const subscribe = (listener)=>{
    if(!listeners.includes(listener)){
      listeners.push(listener);
    }
    
    // 返回一个移出监听器的方法。
    return ()=>{
      listeners = listeners.filter(l=>l!==listener);
    }
  }
  // 初始化时需要执行的，type 要跟 自己定义的 reducer 里面的不一样。
  dispatch({ type: '@@redux-init@@' });

  return {
    state,
    getState,
    dispatch,
    subscribe
  }
}