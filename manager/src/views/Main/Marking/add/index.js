import React ,{useEffect,useState} from 'react';
import { connect } from 'dva';
import { Form, Input, Button,Layout, Breadcrumb,Select,DatePicker,InputNumber} from 'antd';
import styles from "./index.css"
import { height } from 'window-size';
const { Content } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;
function IndexPage(props) {

    let {examType,allQue,examExam,objAll} =props;
    let [val,setVal]=useState("");
    let HandAdduser=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            console.log();
            let start=values.rangeTime[0]._d*1;
            let end=values.rangeTime[1]._d*1
            setVal(values.username)
            examExam({
                title:values.username,
                subject_id:values.usertype,
                exam_id:values.userClass,
                number:values.userNub,
                start_time:start,
                end_time:end
            })
        });
    }

  useEffect(()=>{
    examType();
    allQue();
  },["objAll"]);
  if(objAll){
    props.history.push(`/marking/Adddetil?title=${val}`)
  }
  const { getFieldDecorator } = props.form;
  return  <Layout style={{ padding: "24px"  }}>
  <Breadcrumb style={{padding: "10px 0px"}}>
    <Breadcrumb.Item>添加考试</Breadcrumb.Item>
  </Breadcrumb>
  <Content
    style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
    <div>
        <Form.Item  label="试卷名称">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input/>)}
        </Form.Item>

        <Form.Item  label="选择考试类型">
          {getFieldDecorator('usertype', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })( <Select
           style={{width:"200px"}}
          placeholder="请选择考试类型">
            {
             props.styleExam1 && props.styleExam1.map((item,index)=><Option value={item.exam_id} key={index}>{item.exam_name}</Option>)
            }
          </Select>)}
        </Form.Item>
        
        <Form.Item  label="选择课程">
          {getFieldDecorator('userClass', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })( <Select
           style={{width:"200px"}}
          placeholder="选择课程">
             {
              props.styleExam2 && props.styleExam2.map((item,index)=><Option value={item.subject_id} key={index}>{item.subject_text}</Option>)
             }
          </Select>)}
        </Form.Item>

          <Form.Item  label="设置题数">
          {getFieldDecorator('userNub', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(
            <InputNumber min={3} max={10}/>
          )}
        </Form.Item>

           <Form.Item label="选择时间">
          {getFieldDecorator('rangeTime', {
              rules:[
              { type: 'array', required: true, message: 'Please select time!' }
            ]
        })(
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
          )}
        </Form.Item>

        <Form.Item >
          <Button type="primary" onClick={HandAdduser}>
            创建试卷
          </Button>
        </Form.Item>
      </div>
  </Content>
</Layout>
}

let mapStateProps=state=>{
  return {
    ...state.user
  }
}

let mapDispatchProps=dispatch=>{
  return {
    examType(){
        dispatch({
          type: 'user/addlist',
        })
      },
      allQue(){
        dispatch({
          type: 'user/allQuestion',
        })
      },
      examExam(payload){
          dispatch({
              type:"user/examExam",
              payload,
          })
      }
  }
}
export default connect(mapStateProps,mapDispatchProps)((Form.create())(IndexPage));
