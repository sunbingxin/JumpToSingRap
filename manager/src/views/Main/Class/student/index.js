import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import { Typography ,Table,Input,Select ,Button} from 'antd';
import style from './index.css'
const { Title } = Typography;
const { Option } = Select;
function ClassStudent(props) {
    let {Getstudent} = props
    let [data,setdata] = useState([])
    let [val,setval] = useState('')
    useEffect(function(){
        if(props.show.data){
            setdata(props.show.data.action)
        }else{
            Getstudent()
        }
    },[props.show.data])
    function onChange1(){
        console.log('1')
    }
    function onChange2(){
        console.log('1')
    }
    let columns = [
        {
            render: (text) =>(
                <div className={style.top}>
                    <div>{text?text.student_name:null}</div>
                    <div>{text?text.student_id:null}</div>
                    <div>{text?text.grade_name:null}</div>
                    <div>{text?text.room_text:null}</div>
                    <div>{text?text.student_pwd:null}</div>
                    <div onClick={()=>{
                        props.Delete(text.student_id)
                    }}>删除</div>
                </div>
            ),
        },
    ]
    return <div className={style.userBox}>
        <Title level={3}>学生管理</Title>
        <div className={style.flex}>
            <Input placeholder="Basic usage" onChange={(e)=>{
                setval(e.target.value)
            }} />
            <Select
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange1}
            >
                {
                    console.log(props.user.styleExam1)
                }
                {
                    
                    props.user.styleExam1&&props.user.styleExam1.map((item,index)=>{
                        return <Option value="jack">{item.exam_name}</Option>
                    })
                }
            </Select>,
            <Select
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange2}
            >
                {
                    props.user.styleExam2&&props.user.styleExam2.map((item,index)=>{
                        return <Option value="jack">{item.subject_text}</Option>
                    })
                }
                
            </Select>,
            <Button type="primary" onClick={()=>{
                
            }}>搜索</Button>
            <Button type="primary">重置</Button>
        </div>
        <div>
            <div className={style.top}>
                <div>姓名</div>
                <div>学号</div>
                <div>班级</div>
                <div>教室</div>
                <div>密码</div>
                <div>操作</div>
            </div>
            {console.log(props)}
            <Table columns={columns} dataSource={data} />
        </div>
    </div>
}

  // props的类型检查
  ClassStudent.propTypes = {

  }
  // props的默认值
  ClassStudent.defaultProps = {

  }
const mapStateToProps = state=>{
  return {
    ...state
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    Getstudent(){
        dispatch({
            type:'show/Allstudent'
        })
    },
    Delete(payload){
        dispatch({
            type:'show/delstudent',
            payload
        })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(ClassStudent);
