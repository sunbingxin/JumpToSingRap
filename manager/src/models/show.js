import {userAll1,userAll2,userAll3,userAll4,userAll5,userAll6,Allstudents,Deletestu} from '../services'
export default {
    // 命名空间
    namespace: 'show',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *userAlllist({payload},{call,put}){
          let data1 = yield call(userAll1)
          let data2 = yield call(userAll2)
          let data3 = yield call(userAll3)
          let data4 = yield call(userAll4)
          let data5 = yield call(userAll5)
          let data6 = yield call(userAll6)
          yield put({ type: 'save' ,action1:data1.data,action2:data2.data,action3:data3.data,
          action4:data4.data,action5:data5.data,action6:data6.data});
      },
      *Allstudent({payload},{call,put}){
          let data = yield call(Allstudents)
          // console.log(data)
          yield put({type:'student',action:data.data})
      },
      *delstudent({payload},{call,put}){
          let data = yield call(Deletestu,payload)
          console.log(data)
      }
    //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //     yield put({ type: 'save' });
    //   },
    },
  
    // 同步操作
    reducers: {
      save(state, action) {
        return { ...state, data1:action};
      },
      student(state, action) {
        return { ...state, data:action};
      },
    },
  
  };
  