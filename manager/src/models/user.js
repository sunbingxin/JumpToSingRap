import {login,exam,addTextAll,examStyle,classStyle,uerId,
  setExamId,getExamTitle,searChget,allQuestion,ExamDetail,examExams,appendImg} from "../services";
import {getToken,setToken} from "../utils/cookie";
import {routerRedux} from "dva/router"
export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {
      isLoad:0,
      isArr:[],
      styleExam1:[],
      styleExam2:[],
      styleExam3:[],
      obj:{},
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
    *appendImg({payload},{call,put}){
      let data = yield call(appendImg,payload)
      yield put({type:'appen',action:data.data})
    },
    *login({ payload },{ call, put }){
        let data = yield call(login,payload);
        if(data.code===1){
          setToken(data.token)
        }
        yield put({ type: 'save' , payload:data.code===1?1:-1});
    },

    *exam({ payload },{ call, put }){  //获取试题类型的
      let data = yield call(exam);
      yield put({type:"examSave",payload:data})
  },
  *addlist({payload},{call,put}){
      let userId=yield call(uerId);
      
      let exStyle=yield call(examStyle);
      let clStyle=yield call(classStyle);
      let eaStyle=yield call(exam);
      
      yield put({type:"userId",payload:userId})
      yield put({type:"styleExam",payload:exStyle}) // 获取试题类型2
      yield put({type:"styleCla",payload:clStyle}) //获取考试类型3
      yield put({type:"styleExm",payload:eaStyle}) //获取所有的课程
  },

  *setExam({payload},{call,put}){
    let data=yield call(setExamId,payload);
    yield put({type:"setExId",payload:data})
  },

  *getExamTitle({payload},{call,put}){
    let data=yield call(getExamTitle);
    yield put({type:"getExamAll",payload:data})
  },

  *searchget({payload},{call,put}){
    let data=yield call(searChget,payload);
    yield put({type:"getExamAll",payload:data})
  },

  *gettext({payload},{call,put}){
    let data=yield call(addTextAll,payload);
    yield put ({type:"getTextAll",payload:data})
  },
  
  *ExamDetail({payload},{call,put}){
    let detail = yield call(ExamDetail,payload)
    yield put({
      type:'ExamDeta',
      payload:detail
    })
  },
  *allQuestion({payload},{call,put}){
    let data = yield call(allQuestion)
    yield put({
      type:'allQue',
      payload:data
    })
  },
  *examExam({payload},{call,put}){
    let data=yield call(examExams,payload);
    console.log(data);
    yield put({type:"examExamss",payload:data});
    yield put({type:"isExam"});
  }
    },
    // 同步操作
    reducers: {
      appen(state,{action}){
        return {...state,data:action}
      },
      save(state, {payload}) {
        return { ...state, isLoad:payload };
      },
      examSave(state, {payload}) {
        return { ...state, isArr:payload.code===1?payload.data:[] };
      },
      IsChoose(state,{payload}){
        return {...state, isChoos:payload}
      },
      userId(state,{payload}){
       return {...state,obj:payload.code===1?payload.data:{}}
      },
      allQue(state, {payload}) {
        return { ...state, data:payload.code===1?payload.exam:[]};
      },
      styleExam(state,{payload}){
        return {...state,styleExam1:payload.code===1?payload.data:[]}
      },
      styleCla(state,{payload}){
        return {...state,styleExam2:payload.code===1?payload.data:[]}
      },
      styleExm(state,{payload}){
        return {...state,styleExam3:payload.code===1?payload.data:[]}
      },
      setExId(state,{payload}){
        return {...state,hint:payload.code===1?1:-1}
      },
      getExamAll(state,{payload}){
        return {...state,strAll:payload.code===1?payload.data:[]}
      },
      getTextAll(state,{payload}){
        return {...state,isCode:payload.code===1?1:-1}
      },
      ExamDeta(state, {payload}) {
        return { ...state, data:payload.code===1?payload.exam:[]};
      },
      examExamss(state,{payload}){
        return {...state,objAll:payload.code===1?payload.data.questions:[],strAoo:payload.data.questions};
      },
      isExam(state,{payload}){
        return {...state,objAll:undefined};
      }
    },
  };
  