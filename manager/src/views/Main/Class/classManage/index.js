import React ,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from  "./index.css"
import {Layout,Breadcrumb,Button,Table,Modal,Form,Input,Select } from "antd";
const { Content } = Layout;
const { Option } = Select;
function IndexPage(props) {
  let {getGrade,classData,subjectData,roomData,addGrande,delClass}=props;
  const columns = [
    {
      title: '班级名称',
      dataIndex: 'grade_name',
    },
    {
      title: '课程名',
      dataIndex: 'subject_text',
    },
    {
      title: '教室号',
      dataIndex: 'room_text',
    },
    {
      title: '操作',
      render: (text, record) => (
        <span>
          <a onClick={()=>{
            delClass({
              grade_id:record.grade_id
            })
          }} >删除</a>|<a onClick={()=>{
            console.log(record);
          }}>修改</a>
        </span>
      ),
    },
  ];
  let [choose,setChoose]=useState(false);
  let [title,setTitle]=useState("");
  let [seleOne,setSeleOne]=useState("");
  let [seleTwo,setSeleTwo]=useState("");
  useEffect(()=>{
    getGrade()
  },["classData"])
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
   <Button type="primary" icon="plus" onClick={()=>{
      setChoose(true)
    }}>
      添加班级
    </Button>
    <Table dataSource={classData} columns={columns} />
    <Modal
          title="添加班级"
          visible={choose}
          onOk={handleOk}
          okText="提交"
          cancelText="取消"
          onCancel={()=>{
            setChoose(false);
          }}
        >
         <Form>
         <Form.Item label="班级名:">
           <Input placeholder="班级名" onChange={(e)=>{setTitle(e.target.value)}} ></Input>
         </Form.Item>
         <Form.Item label="教室号:">
         <Select placeholder="请选择教室号" onChange={(e)=>setSeleOne(e)}>
         {
           roomData&&roomData.map((item,key)=><Option key={key} value={item.room_id}>{item.room_text}</Option>)
         }
         </Select>
         </Form.Item>
         <Form.Item label="课程名:">
         <Select placeholder="课程名"  onChange={(e)=>setSeleTwo(e)}>
         {
           subjectData&&subjectData.map((item,key)=><Option key={key} value={item.subject_id}>{item.subject_text}</Option>)
         }
         </Select>
         </Form.Item>
         </Form>
        </Modal>
  </Content>
</Layout>
function handleOk(){
  if(title&&seleOne&&seleTwo){
    addGrande({
      grade_name:title,
      room_id:seleOne,
      subject_id:seleTwo,
    })
  }
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
       getGrade(){
         dispatch({
           type:"class/gtade", //获取班级展示
         })
       },
       addGrande(payload){
        dispatch({
          type:"class/addrade",
          payload,
        })
       },
       delClass(payload){
        dispatch({
          type:"class/delClass",
          payload,
        })
       }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
