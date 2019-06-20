import React ,{useEffect,useState} from 'react';
import { connect } from 'dva';
import { Layout, Breadcrumb,Input,Select,Button,message } from 'antd';
import Editor from 'for-editor'
import styles from "./index.css"
const { Content } = Layout;
const { Option } = Select;

function filterOne(str,pathname){
  str=str===undefined?[]:str;
  return  str.find(item=>{
    return item.questions_id===pathname
  })
 
}

function IndexPage(props) {
  let {getAll,styleExam1,styleExam2,styleExam3,obj,setExam,hint}=props;
  const [account, setAccount] = useState("");
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [select3, setSelect3] = useState("");

  const pathname=decodeURIComponent(props.history.location.search.split("=")[1]);
  const arr= filterOne(props.strAll,pathname)

  useEffect(()=>{
    if(!styleExam1.length||!styleExam2.length||!styleExam3.length){
      getAll();
    }
    if(hint===1){
      message.success('添加试题成功');
    }else if(hint===-1){
      message.error('试题添加失败');
    }
  },[styleExam1,styleExam2,styleExam3,obj,hint])
   
  return  <Layout style={{ padding: '0 24px 24px' }}>
  <Breadcrumb>
    <Breadcrumb.Item>添加试题</Breadcrumb.Item>
  </Breadcrumb>
  <Content
    style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
  <h4>题目信息</h4>
  <h4>题干</h4>
  <Input placeholder="请输入题目标题,不超过20个字" defaultValue={arr?arr.title:account} onInput={(e)=>{
    setAccount(e.target.value)
  }} />
  <div className={styles.editor}>
  <Editor value={arr?arr.questions_stem:value1} onChange={(e)=>{
    setvalue1(e)
   }} />
  </div>
  <div>
  <h4>请选择考试类型:</h4>
   <Select style={{ width: 120}}  defaultValue={arr?arr.exam_name:select1} onChange={(e)=>{
      setSelect1(e);
   }}>
   {
     styleExam1.map(item=><Option key="index" value={item.exam_id}>{item.exam_name}</Option>)
   }
   </Select>
  </div>
  <div>
  <h4>请选择课程类型:</h4>
   <Select style={{ width: 120}} defaultValue={arr?arr.subject_text:select2} onChange={(e)=>{
      setSelect2(e);
   }}>
   {
     styleExam2.map(item=><Option key="index"  value={item.subject_id}>{item.subject_text}</Option>)
   }
   </Select>
  </div>
  <div>
  <h4>请选择题目类型:</h4>
   <Select style={{ width: 120}}  defaultValue={arr?arr.questions_type_text:select3} onChange={(e)=>{
      setSelect3(e);
   }}>
   {
     styleExam3.map(item=><Option  key="index" value={item.questions_type_id}>{item.questions_type_text}</Option>)
   }
   </Select>
  </div>
  <div className={styles.editor}>
  <Editor value={arr?arr.questions_answer:value2} onChange={(e)=>{
    setvalue2(e)
  }}/>
  </div>

  <Button type="primary" onClick={()=>{
    let object={
      questions_type_id:select3,
      questions_stem:value1,
      subject_id:select2,
      exam_id:select1,
      user_id:obj.user_id,
      questions_answer:value2,
      title:account,
    }
    setExam(object);
  }}>提交</Button>
  </Content>
</Layout>
}

let mapStateProps=state=>{
  return {
    ...state.user
  }
}

let mapDispatchProps=dispatch=>{
  return {
     getAll(){
       dispatch({
         type:"user/addlist",
       })
     },
     setExam(payload){
       dispatch({
         type:"user/setExam",
         payload,
       })
     }
     
  }
}
export default connect(mapStateProps,mapDispatchProps)(IndexPage);
