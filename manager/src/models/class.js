import {getGtade,getSubject,getRoom,addGtade,delClass,addRoom,gradUpdata} from "../services"
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *gtade({payload},{call,put}){
          let dataGtade= yield call(getGtade);
          let dataSubject= yield call(getSubject);
          let dataRoom= yield call(getRoom);

          yield put({type:"getGtade",payload:dataGtade})
          yield put({type:"getSubject",payload:dataSubject})
          yield put({type:"getRoom",payload:dataRoom})
      },
      *addrade({payload},{call,put}){
          let data=yield call(addGtade,payload)
          yield put({type:"addRande",payload:data})
      },
      *delClass({payload},{call,put}){
        let data=yield call(delClass,payload);
        yield put({type:"deleClass",payload:data})
      },
      *addRoom({payload},{call,put}){
        let data=yield call(addRoom,payload);
        console.log(data);//删除
      },
      *gradUpdata({payload},{call,put}){
        let data=yield call(gradUpdata,payload);
        console.log(data);//更新
      }
    },
  
    // 同步操作
    reducers: {
        getGtade(state, {payload}) {
        return { ...state, classData:payload.code===1?payload.data:[]};
      },
      getSubject(state, {payload}) {
        return { ...state, subjectData:payload.code===1?payload.data:[]};
      },
      getRoom(state, {payload}) {
        return { ...state, roomData:payload.code===1?payload.data:[]};
      },
      addRande(state,{payload}){
          return {...state,grader:payload.code===1?true:false};
      },
      deleClass(state,{payload}){
        return {...state,isDele:payload.code===1?true:false};
    },
    },
  
  };
  