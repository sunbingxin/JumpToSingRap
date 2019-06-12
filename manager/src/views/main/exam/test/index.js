import React,{useEffect} from "react"
import style from "./index.css"
import {connect} from "dva"
import { Layout, Breadcrumb, Select, Row, Col, Button, Icon, Tag ,Table} from 'antd';

const { Content } = Layout;
const { Option } = Select;
const { CheckableTag } = Tag;
const columns = [
    {
      dataIndex: 'name',
      key: 'name', 
      render: text => (
        <>
            <h4>{text}</h4>
            <h4>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="gold">gold</Tag>
            </h4>
            <a href="">dingshaoshan</a>
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
  const data = [
    {
      key: '1',
      name: 'John '
    },
    {
      key: '2',
      name: 'Jim Green'
    },
    {
      key: '3',
      name: 'Joe Black'
    },
  ];

function Look(props) {
   useEffect(()=>{
    props.getExamClass();
    props.getAllCourse()
   },[])
   console.log(props)
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
                            <MyTag>Tag1</MyTag>
                            <MyTag>Tag2</MyTag>
                            <MyTag>Tag3</MyTag>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 2 }} span={8}>
                        考试类型:<Select
                            defaultValue=""
                            style={{ width: 120 }}
                            dropdownRender={menu => (
                                <div>
                                    {menu}
                                </div>
                            )}
                        >
                          <Option key='1' value='978654'>7986543</Option>
                          <Option key='7' value='978654'>7986543</Option>
                          <Option key='8' value='978654'>7986543</Option>
                          <Option key='9' value='978654'>7986543</Option>
                          <Option key='10' value='978654'>7986543</Option>
                        </Select>
                    </Col>
                    <Col span={8}>题目类型:<Select
                        defaultValue=""
                        style={{ width: 120 }}
                        dropdownRender={menu => (
                            <div>
                                {menu}
                            </div>
                        )}
                    >
                          <Option key='2' value='978654'>7986543</Option>
                          <Option key='3' value='978654'>7986543</Option>
                          <Option key='4' value='978654'>7986543</Option>
                          <Option key='5' value='978654'>7986543</Option>
                          <Option key='6' value='978654'>7986543</Option>
                        
                        
                    </Select></Col>
                    <Col span={8}>
                        <Button className={style.btn} type="primary">
                            <Icon type="search" />查询
                    </Button>
                    </Col>
                </Row>
                <Table className={style.table} columns={columns} dataSource={data} />
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
     ...state.view
   }
 }
 const MapDispatch=dispatch=>({
   //获取所有考试类型
  getExamClass(){
    dispatch({
      type:"view/examClass",
    })
  },
  //获取所有课程
  getAllCourse(){
    dispatch({
      type:"view/course",
    })
  },
  getAllExam(){
    dispatch({
      type:"view"
    })
  }
 })
export default connect(MapState,MapDispatch)(Look)