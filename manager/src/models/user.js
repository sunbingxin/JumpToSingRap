import {login} from '../services'
export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        *logins({payloag},{call,put}){
            console.log('payloa...',payloag,login)
            let data = yield call(login,payloag)
            console.log('data..',data)
        },
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    // 同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  