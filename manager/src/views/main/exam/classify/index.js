import React ,{useEffect,useState} from 'react';
import { connect} from 'dva';
import { Layout, Breadcrumb,Button,Table ,Modal,Input,message,Upload,Icon} from 'antd';
import XLSX from 'xlsx';
const { Content } = Layout;

function IndexPage(props) {
  let {addExam,isArr,addText,isCode}=props;
  let [state,setState]=useState(false);
  let [value,setValue]=useState("");

  let [head,setHead]=useState([]);
  let [tab,setTab]=useState([]);
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
  function handleChange(pload){
    const reader = new FileReader();
    reader.onload=(evt)=>{
      const bstr = evt.target.result;
      // 读出excel文件
      const wb = XLSX.read(bstr, {type:'binary'});
      // 读出第一张excel表
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      // 把第一张表的数据转化为json对象
      const data = XLSX.utils.sheet_to_json(ws, {header:1});
      
      setHead(data[0].map((item,index)=>{
        return {
          title:item,
          key:index,
          dataIndex:index,
        }
      })); 
      setTab(data.slice(1).map((item,index)=>{
        let obj={key:index}
        item.forEach((val,key)=>{
          obj[key]=val
        })
        return obj;
      }));
    }
    reader.readAsBinaryString(pload.file.originFileObj);
  }
  useEffect(()=>{
    if(!isArr.length){
      addExam();
    }
    if(isCode===1){
      message.success("添加试题类型成功")
    }else if(isCode===-1){
      message.error("添加试题类型失败")
    }
  },[isArr,isCode])
  return  <Layout style={{ padding: '0 24px 24px' }}>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item >试题分类</Breadcrumb.Item>
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
      setState(true)
    }}>
      添加类型
    </Button>
    <Table dataSource={isArr} columns={columns} />
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

     <Upload accept={".xlsx"} onChange={(pload)=>handleChange(pload)}>
    <Button>
      <Icon type="upload" /> 上传
    </Button>
  </Upload>
  <Table dataSource={tab} columns={head}/>
  </Content>
</Layout>
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
export default connect(mapStateToProps,mapdispatchToProps)(IndexPage)
