import React,{useEffect,useState} from "react"
import style from "./index.css"
import {connect} from "dva"
import { Layout, Breadcrumb, Select, Row, Col, Button, Icon, Tag ,Table,Radio } from 'antd';
import {Link} from "dva/router"
const { Content } = Layout;
const { Option } = Select;
const { CheckableTag } = Tag;
const columns = function(props){
  return [
    {
      dataIndex: '',
      exam_name:"",
      key: 'name', 
      render: text => (
        <div onClick={()=>{
          props.history.push("/exam/detail?id="+text.questions_id)
        }} >
            <h4>{text.title}</h4>
            <h4>
                <Tag color="blue">{text.questions_type_text}</Tag>
                <Tag color="geekblue">{text.subject_text}</Tag>
                <Tag color="gold">{text.exam_name}</Tag>
            </h4>
            <a href="">{text.user_name}</a>
            <a href="">发布</a>
        </div>
      ),
    },
    {
      key: 'action',
      render: (text, record) => (
        <span style={{position:"absolute",right:20}}>
          {props.istitle?<a onClick={()=>{
            props.onFun(record)
          }} >添加/</a>:null}
          <Link to={`/exam/add?id=${text.questions_id}`}>编辑</Link>
        </span>
      ),
    },
  ]
};
function Look(props) {
  let {getExamTitle,addExam,strAll,styleExam1,styleExam2,styleExam3,searchget}=props;
   useEffect(()=>{
      if(!strAll){
        getExamTitle();
      }
      if(!styleExam1.length||!styleExam2.length||!styleExam3.length){
        addExam();
      }
   },[strAll,styleExam2,styleExam1,styleExam3])
  //  console.log(strAll);
   const [select1, setSelect1] = useState("");
   const [select2, setSelect2] = useState("");
   const [select3, setSelect3] = useState("");
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>试题分类</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    overflow:'auto'
                }}>
                <Row className={style.row}>
                    <Col>课程类型:</Col>
                    <Col style={{ marginLeft: 16 }}>
                      <Radio.Group size="small" defaultValue="0" buttonStyle="solid">
                          { 
                            styleExam2&&styleExam2.map((item,index)=><Radio.Button onChange={(e)=>{
                              setSelect1(e.target.value)
                            }} key={index} value={item.subject_id}>{item.subject_text}</Radio.Button>)
                          }
                        </Radio.Group>

                    </Col>
                </Row>
                <Row className={style.roow}>
                    <Col lg={{ span: 6, offset: 2 }} span={8}>
                        考试类型:  <Select 
                        defaultValue="" 
                        style={{ width: 120}} 
                        value={select2}

                        onChange={(e)=>{
                          setSelect2(e);
                          }}>
                  {
                    styleExam1.map((item,index)=><Option key={index} value={item.exam_id}>{item.exam_name}</Option>)
                  }
                </Select>
                    </Col>
                    <Col lg={{ span: 6, offset: 2 }} span={8} >
                        题目类型:  <Select 
                        defaultValue="" 
                        style={{ width: 120}} 
                        value={select3}

                        onChange={(e)=>{
                          setSelect3(e);
                          }}>
                  {
                   styleExam3&&styleExam3.map((item,index)=><Option  key={index} value={item.questions_type_id}>{item.questions_type_text}</Option>)                    
                  }
                </Select>
                    </Col>
                    <Col span={8}>
                        <Button className={style.btn} type="primary" onClick={()=>{btn()}} >
                           <Icon type="search" />查询
                    </Button>
                    </Col>
                </Row>
                <Table  className={style.table} columns={columns(props)} dataSource={strAll} />
            </Content>
        </Layout>
    )
    function btn(){
      searchget({exam_id:select2,questions_type_id:select3,subject_id:select1});
    }
}
class MyTag extends React.Component {
    state = { checked: false };
  
    handleChange = checked => {
      this.setState({ checked });
    };
  
    render() {
      return (
        <CheckableTag {...this.props}  checked={this.state.checked} onChange={this.handleChange}/>
      );
    }
  }
 const MapState=state=>{
   return {
     ...state.user
   }
 }
 const MapDispatch=dispatch=>{
    return{
       getExamTitle(){
         dispatch({
            type:"user/getExamTitle"
         })
       },
       addExam(){
        dispatch({
          type:"user/addlist",
        })
      },
      searchget(payload){
        dispatch({
          type:"user/searchget",
          payload,
        })
      }
    }
  
 }
export default connect(MapState,MapDispatch)(Look)

