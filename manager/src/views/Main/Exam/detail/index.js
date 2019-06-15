import React,{useEffect,useState} from "react"
import {connect} from "dva"
import Styles from './index.css';
import { Layout, Breadcrumb, Tag } from 'antd';
const { Content } = Layout;

function Detail(props) {
    let [data,setdata]=useState({arr:""});
    const detailId=props.history.location.search.split("=")[1]
    let {strAll}=props;
    strAll=strAll===undefined?[]:strAll
    useEffect(()=>{
        const arr= strAll.filter(item=>{
            return item.questions_id===detailId;
        })
        setdata({arr});
    },[strAll])
    return <div>
    <Layout style={{ padding: '0 24px 24px' }}>
       <div>
           <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item>{data.arr[0]?data.arr[0].user_name:''}</Breadcrumb.Item>
           </Breadcrumb>
           
           <h4>
               <Tag color="blue">{data.arr[0]?data.arr[0].exam_name:''}</Tag>
               <Tag color="geekblue">{data.arr[0]?data.arr[0].questions_type_text:''}</Tag>
               <Tag color="gold">{data.arr[0]?data.arr[0].subject_text:''}</Tag>
           </h4>
           <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item>{data.arr[0]?data.arr[0].title:''}</Breadcrumb.Item>
           </Breadcrumb>
       </div>
       <div className={Styles.flex}>
           <Content
           style={{
               background: '#fff',
               padding: 24,
               margin: 0,
               minHeight: 280,
           }}
           >
               {data.arr[0]?data.arr[0].questions_stem:''}
           </Content>
           <Content
           style={{
               background: '#fff',
               padding: 24,
               margin: 0,
               minHeight: 280,
           }}
           >
               {data.arr[0]?data.arr[0].questions_answer:''}
           </Content>
       </div>
   </Layout>
</div>
}
  
 const MapState=state=>{
   return {
       ...state.user
   }
 }
 const MapDispatch=dispatch=>{
    return{}
  
 }
export default connect(MapState,MapDispatch)(Detail)

