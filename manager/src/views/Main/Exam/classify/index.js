import React ,{useEffect} from 'react';
import { connect} from 'dva';
import { Layout, Breadcrumb,Button,Table ,Modal,Input} from 'antd';
const { Content } = Layout;
function IndexPage(props) {
  let {addExam,isArr,isChoos,changeIsChoose}=props;
  let valu="";
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

  function fun(){
    changeIsChoose(true)
  };
  function handleCancel(){
    changeIsChoose(false)
  };
  function handleOk(){
    setTimeout(() => {
      changeIsChoose(false)
    }, 1000);
    console.log(valu)
  };
  useEffect(()=>{
    if(!isArr.length){
      addExam();
    }
  },[isArr,isChoos])
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
    <Button type="primary" icon="plus" onClick={fun}>
      添加类型
    </Button>
    <Table dataSource={isArr} columns={columns} />;

    <Modal
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          visible={isChoos}
        >
          <Input placeholder="Basic usage" defaultValue={valu}/>
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
    changeIsChoose(payload){
      dispatch({
        type:"user/ischoose",
        payload,
      })
    }
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(IndexPage);
