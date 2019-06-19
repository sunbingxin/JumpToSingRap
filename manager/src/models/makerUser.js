import {genYons,identity,getUsers,addUsers,getAuthority,getRelation,addYonHu,setQuanxians,addauthorityViewes,setIdentityApi,setIdentityViews} from "../services"

export default {
    // 命名空间
    namespace: 'makerUser',
  
    // 模块内部的状态
    state: {
      addCode:0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
    //useridList
    // 异步操作
    effects: {
       *getAllDate({payload},{call,put}){
           let getidentity=yield call(identity)//获取身份id
           let getUser=yield call(getUsers)//获取所有管理员
           let gethority=yield call(getAuthority); //获取已有视图
           let getRe=yield call(getRelation);
           yield put({type:"getIdentity",payload:getidentity})
           yield put({type:"getUser",payload:getUser})
           yield put({type:"getAuth",payload:gethority})
           yield put({type:"getTion",payload:getRe});
       },
       *addUsers({payload},{call,put}){
         let data=yield call(addUsers,payload);
         yield put({type:"adduse",payload:data});
         yield put({type:"gaiZhi"});
       },
       *addYon({payload},{call,put}){
         let data=yield call(addYonHu,payload);
         yield put({type:"adduse",payload:data});
         yield put({type:"gaiZhi"});
       },
       *genYon({payload},{call,put}){
         let data=yield call(genYons,payload);
         yield put({type:"adduse",payload:data});
         yield put({type:"gaiZhi"});
       },
       *setQuanxian({payload},{call,put}){
         let data=yield call(setQuanxians,payload);
         yield put({type:"adduse",payload:data});
         yield put({type:"gaiZhi"});
       },
       *addauthorityViewe({payload},{call,put}){
         let data=yield call(addauthorityViewes,payload);//视图权限问题
         yield put({type:"adduse",payload:data});
         yield put({type:"gaiZhi"});
       },
       *setIdentityApi({payload},{call,put}){
         let data=yield call(setIdentityApi,payload);
         yield put({type:"adduse",payload:data});
         yield put({type:"gaiZhi"});
       },
       *setIdentityView({payload},{call,put}){
         let data=yield call(setIdentityViews,payload);
         yield put({type:"adduse",payload:data});
         yield put({type:"gaiZhi"});
       }
    },
  
    // 同步操作
    reducers: {
      getIdentity(state,{payload}){
        return {...state,useridList:payload.code===1?payload.data:[]}
      },
      getUser(state,{payload}){
        return {...state,identityidList:payload.code===1?payload.data:[]}
      },
      getAuth(state,{payload}){
        return {...state,Authhority:payload.code===1?payload.data:[]}
      },
      getTion(state,{payload}){
        return {...state,uthorityRelation:payload.code===1?payload.data:[]}
      },
      adduse(state,{payload}){
        return {...state,addCode:payload.code===1?1:-1}
      },
      gaiZhi(state,actions){
        return {...state,addCode:0}
      }
    },
  
  };
  