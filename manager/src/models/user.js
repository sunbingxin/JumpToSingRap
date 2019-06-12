import {login} from "../services";
import {getToken,setToken} from "../utils/Cookie";
import {routerRedux} from "dva/router"
export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {
      isLoad:0,
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname})=>{
          if(pathname.indexOf("/login") === -1){
             if(!getToken()){
              dispatch(routerRedux.replace({
                pathname:`/login?redirect=${encodeURIComponent(pathname)}`, 
              }))
             }
          }else{
             if(getToken()){
               console.log(123);
              dispatch(routerRedux.replace({
                pathname:"/"
              }))
             }
          }
        })
      },
    },
  
    // 异步操作
    effects: {
    *login({ payload },{ call, put }){
        let data = yield call(login,payload);
        if(data.code===1){
          setToken(data.token)
        }
        yield put({ type: 'save' , payload:data.code===1?1:-1});
    },
    },
  
    // 同步操作
    reducers: {
      save(state, {payload}) {
        return { ...state, isLoad:payload };
      },
      
    },
  
  };
  