import {login,exam} from "../services";
import {getToken,setToken} from "../utils/Cookie";
import {routerRedux} from "dva/router"
export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {
      isLoad:0,
      isArr:[],
      isChoos:false,
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

    *exam({ payload },{ call, put }){
      let data = yield call(exam);
      yield put({type:"examSave",payload:data})
  },

  *ischoose({payload},{call,put}){
    yield put({type:"IsChoose",payload})
  }
    },
  
    // 同步操作
    reducers: {
      save(state, {payload}) {
        return { ...state, isLoad:payload };
      },
      examSave(state, {payload}) {
        return { ...state, isArr:payload.code===1?payload.data:[] };
      },
      IsChoose(state,{payload}){
        return {...state, isChoos:payload}
      }
      
    },
  
  };
  