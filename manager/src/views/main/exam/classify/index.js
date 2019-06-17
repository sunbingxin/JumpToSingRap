import React ,{useEffect,useState} from 'react';
import { connect} from 'dva';
import { Layout, Breadcrumb,Button,Table ,Modal,Input,message} from 'antd';
const { Content } = Layout;

function IndexPage(props) {
  let {addExam,isArr,isChoos,addText,isCode}=props;
  let [state,setState]=useState(false);
  let [value,setValue]=useState("");
  const columns = [
    {
      title: '类型ID',
      dataIndex: 'questions_type_id',
    },
    {
      title: '类型名称',
      dataIndex: 'questions_type_text',
    },
    {
      title: '操作',
      dataIndex: 'questions_type_sort',
    },
  ];
  function handleOk(){
    console.log("ok");
    addText({
      text:value,
      sort:(Math.random()+"").substr(2,8)
    })
    setState(false)
  }
  useEffect(()=>{
    if(!isArr.length){
      addExam();
    }
    if(isCode===1){
      message.success("添加试题类型成功")
    }else if(isChoos===-1){
      message.error("添加试题类型失败")
    }
  },[isArr,isChoos,isCode])
  return  <Layout style={{ padding: '0 24px 24px' }}>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>试题分类</Breadcrumb.Item>
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
      setState(true)
    }}>
      添加类型
    </Button>
    <Table dataSource={isArr} columns={columns} />;
    <Modal
      title="请输入您要填写的试题"
      visible={state}
      onCancel={()=>{
        setState(false)
      }}
      onOk={handleOk}
      >
     <Input placeholder="请添加试题" defaultValue={value} onChange={(e)=>{
      setValue(e.target.value)
     }} />
     </Modal>
  </Content>
</Layout>;
}
let mapStateToProps=state=>{
  return {
    ...state.user
  }
}
let mapdispatchToProps=dispatch=>{
  return {
    addExam(){
      dispatch({
        type:"user/exam",
      })
    },
    addText(payload){
      dispatch({
        type:"user/gettext",
        payload,
      })
    }
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(IndexPage);
