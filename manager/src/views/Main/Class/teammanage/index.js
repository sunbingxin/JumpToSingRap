import React ,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from  "./index.css"
import {Layout,Breadcrumb,Button,Table,Modal,Form,Input } from "antd";
const { Content } = Layout;
function IndexPage(props) {
  let {roomData,addRoom,getGrade,delRoom}=props;
  const columns = [
    {
      title: '教室号',
      dataIndex: 'room_text',
    },
    {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={()=>{
           delRoom({
            room_id:record.room_id
           })
          }} >删除</a>
        </span>
      ),
    },
  ];
  let [choose,setChoose]=useState(false);
  let [title,setTitle]=useState("");
  useEffect(()=>{
    getGrade();
  },[])
 return  <Layout style={{ padding: '0 24px 24px' }}>
 <Breadcrumb style={{ margin: '16px 0' }}>
   <Breadcrumb.Item>班级管理</Breadcrumb.Item>
 </Breadcrumb>
   <Content
    style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
   >
   <Button style={{ margin: '5px 0' }}  type="primary" icon="plus" onClick={()=>{
      setChoose(true)
    }}>
      添加教室
    </Button>
    <Table dataSource={roomData} columns={columns} />
    <Modal
          title="添加教室"
          visible={choose}
          onOk={handleOk}
          okText="提交"
          cancelText="取消"
          onCancel={()=>{
            setChoose(false);
          }}
        >
         <Form>
         <Form.Item label="教室号:">
           <Input placeholder="教室号" onChange={(e)=>{setTitle(e.target.value)}} ></Input>
         </Form.Item>
         </Form>
        </Modal>
  </Content>
</Layout>
function handleOk(){
    addRoom({
     room_text:title,
    })
  setChoose(false);
}
}

let mapStateToProps=state=>{
  return {
    ...state.class
  }
}

let mapDispatchToProps=dispatch=>{
    return {
     addRoom(payload){
         dispatch({
             type:"class/addRoom",
             payload,
         })
     },
     getGrade(){
      dispatch({
        type:"class/gtade", //获取班级展示
      })
    },
    ///manger/room/delete
    delRoom(payload){
      dispatch({
        type:"class/delroom",
        payload,
      })
    }
       
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
