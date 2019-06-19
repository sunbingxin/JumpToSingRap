import React ,{useEffect,useState} from 'react';
import { connect } from 'dva';
import {Layout, Breadcrumb,Button} from 'antd';
import styles from "./index.css"
import { JsxEmit } from 'typescript';
const { Content } = Layout;

function IndexPage(props) {
  let arr=[];
  let [arrItem,setArrItem]= useState([]);
  let {strAoo,getAll,strAll} =props;
  if(strAoo){
   let str= JSON.parse(strAoo[0].question_ids)
   strAll&&strAll.forEach(item=>{
      str.forEach(val=>{
        if(val===item.questions_id){
          arr.push(item);
        }
      })
   })
  
   arrItem=arrItem.concat(arr)
  }else{
    props.history.push(`/marking/add`)
  }
  let title= decodeURIComponent(props.history.location.search.split("=")[1])
  useEffect(()=>{
    getAll();
  },[])
  let Handlebars=ind=>{
    arrItem.splice(ind,1);
    setArrItem(arrItem);
  }
  return  <Layout style={{ padding: "24px"  }}>
  <Breadcrumb style={{padding: "10px 0px"}}>
    <Breadcrumb.Item>创建试卷</Breadcrumb.Item>
  </Breadcrumb>
  <Button style={{width:'100px', margin:"0px 0 5px -2px"}} >添加新题</Button>
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
        <div onClick={()=>Handlebars(index)} >删除</div>
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
   <Button type="primary">创建试卷</Button>
  </div>
  
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
    }
  }
}
export default connect(mapStateProps,mapDispatchProps)(IndexPage);
