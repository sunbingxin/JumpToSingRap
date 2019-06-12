import {login} from '../services'
import {getTooken,setTooken} from '../utils/cookie'
import { routerRedux } from 'dva/router';
export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname})=>{
          console.log(pathname)
          if(pathname.indexOf('/login') === -1){
            if(!getTooken()){
              dispatch(routerRedux.replace({
                pathname:`/login?redirect=${encodeURIComponent(pathname)}`
              }))
            }
          }else{
            if(getTooken()){
              console.log('1')
              dispatch(routerRedux.replace({
                pathname:`/`
              }))
            }
          }
        })
      },
    },
  
    // 异步操作
    effects: {
        *logins({payload},{call,put}){
            let data = yield call(login,payload)
            if(data.code === 1){
              setTooken(data.token)
            }
            yield put({type:'save',payload:data.code===1?1:-1})
        },
      // *fetch({ payload }, { call, put }) {  // eslint-disable-line
      //   yield put({ type: 'save' });
      // },
    },
  
    // 同步操作
    reducers: {
      save(state, {payload}) {
        return { ...state,isLogin:payload };
      },
    },
  
  };
  