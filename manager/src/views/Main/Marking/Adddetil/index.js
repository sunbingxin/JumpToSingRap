import React ,{useEffect,useState} from 'react';
import { connect } from 'dva';
import {Layout, Breadcrumb,Button,Drawer} from 'antd';
import styles from "./index.css"
import { JsxEmit } from 'typescript';

import TextIndex from "../../Exam/test";
const { Content } = Layout;

function IndexPage(props) {
  let [arrItem,setArrItem]= useState([]);
  let [visible,setVisible]= useState(false);
  let {strAoo,getAll} =props;
  useEffect(()=>{
    if(strAoo){
      setArrItem(strAoo);
      console.log(strAoo);
    }else{
      props.history.push(`/marking/add`)
    }
  },[strAoo])
  let title= decodeURIComponent(props.history.location.search.split("=")[1])
  useEffect(()=>{
    getAll();
  },[])
  function showDrawer(){
    setVisible(true);
  }
  function onClose(){
    setVisible(false);
  }
  return  <Layout style={{ padding: "24px"  }}>
  <Breadcrumb style={{padding: "10px 0px"}}>
    <Breadcrumb.Item>创建试卷</Breadcrumb.Item>
  </Breadcrumb>
  <Button style={{width:'100px', margin:"0px 0 5px -2px"}} onClick={showDrawer} >添加新题</Button>
  <Content
    style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
  <div className={styles.boxTop}>
    <div>{title}</div>
    <div>考试时间: 1小时30分钟 监考人: 刘于 开始考试时间: 2018.9.10 10:00 阅卷人: 刘于</div>
  </div>
  {
    arrItem&&arrItem.map((item,index)=><div key={index} className={styles.boxCent}>
      <div>
        <div>{index+1}:{item.title}</div>
        <div onClick={()=>{
          setArrItem(arrItem.slice(index+1));
        }} >删除</div>
      </div>
  
      <div>
        {item.questions_stem}
      </div>
      <div>
        {item.questions_answer}
      </div>
    </div>)
  }
  <div className={styles.butn}>
   <Button type="primary" onClick={()=>{
    let arr = strAoo.map(item=>item.questions_id);
    props.updataParper({question_ids:JSON.stringify(arr)})
    props.history.push("/marking/lists");
   }} >创建试卷</Button>
  </div>
    <Drawer
      title="添加试题"
      placement="right"
      width={800}
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <TextIndex istitle="true" onFun={(data)=>{
       arrItem.push(data);
       setArrItem(arrItem);
      }} />
    </Drawer>
  </Content>
</Layout>
}

let mapStateProps=state=>{
  return {
    strAoo:state.user.strAoo,
    strAll:state.user.strAll,
  }
}

let mapDispatchProps=dispatch=>{
  return {
    getAll(){
     dispatch({
       type:"user/getExamTitle"
     })
    },
    updataParper(payload){
      dispatch({
        type:"user/updataParper",
        payload,
      })
    }
  }
}
export default connect(mapStateProps,mapDispatchProps)(IndexPage);
