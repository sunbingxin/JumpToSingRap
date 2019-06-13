import React,{useEffect,useState} from "react"
import style from "./index.css"
import {connect} from "dva"
import { Layout, Breadcrumb, Select, Row, Col, Button, Icon, Tag ,Table} from 'antd';
const { Content } = Layout;
const { Option } = Select;
const { CheckableTag } = Tag;
const columns = [
    {
      dataIndex: '',
      exam_name:"",
      key: 'name', 
      render: text => (
        <>
            <h4>{text.title}</h4>
            <h4>
                <Tag color="blue">{text.questions_type_text}</Tag>
                <Tag color="geekblue">{text.subject_text}</Tag>
                <Tag color="gold">{text.exam_name}</Tag>
            </h4>
            <a href="">{text.user_name}</a>
            <a href="">发布</a>
        </>
      ),
    },
    {
      key: 'action',
      render: (text, record) => (
        <span style={{position:"absolute",right:20}}>
          <a href="">编辑</a>
        </span>
      ),
    },
  ];
function Look(props) {
  let {getExamTitle,addExam,strAll,styleExam1,styleExam2,styleExam3}=props;
  console.log(styleExam1,styleExam2,styleExam3,"111111111111111111111");
   useEffect(()=>{
      if(!strAll){
        getExamTitle();
        addExam();
      }
      console.log(strAll);
   },[strAll,styleExam2,styleExam1,styleExam3])
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
                }}
            >
                <Row className={style.row}>
                    <Col span={6}>课程类型:</Col>
                    <Col span={18}>
                        <div>
                          {
                            styleExam2&&styleExam2.map(item=><MyTag>{item.exam_name}</MyTag>)
                          }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 2 }} span={8} >
                        考试类型:  <Select 
                        defaultValue="周考1" 
                        style={{ width: 120}} 
                        value={select2}
                         onChange={(e)=>{
                           setSelect2(e);
                           }}>
   {
     styleExam1&&styleExam1.map(item=><Option key="index"  value={item.subject_id}>{item.subject_text}</Option>)
   }
   </Select>
                    </Col>

                    <Col span={8}>题目类型:<Select
                        defaultValue="简答题"
                        style={{ width: 120 }}
                        dropdownRender={menu => (
                            <div>
                                {menu}
                            </div>
                        )}
                    >
                          {
                             styleExam3&&styleExam3.map(item=><Option key="index" value={item.exam_id}>{item.exam_name}</Option>)
                          }
                    </Select></Col>
                    <Col span={8}>
                        <Button className={style.btn} type="primary">
                            <Icon type="search" />查询
                    </Button>
                    </Col>
                </Row>
                <Table className={style.table} columns={columns} dataSource={strAll} />
            </Content>
        </Layout>
    )
}
class MyTag extends React.Component {
    state = { checked: false };
  
    handleChange = checked => {
      this.setState({ checked });
    };
  
    render() {
      return (
        <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
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
    }
  
 }
export default connect(MapState,MapDispatch)(Look)

