import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import { Typography,Radio ,Table, Divider, Tag,Input,Select ,Button} from 'antd';
import style from './index.css'
const { Title } = Typography;
const { Option } = Select;
function ClassStudent(props) {
    let {Getstudent,getGrade} = props
    let [data,setdata] = useState([])
    let [room,setroom] = useState([])
    let [alass,setclass] = useState([])
    let [arr,setarr] = useState([])
    let [val,setval] = useState('')
    let [select1,setselect1] = useState('')
    let [select2,setselect2] = useState('')


    useEffect(function(){
        if(props.show.data&&props.class.classData){
            setdata(props.show.data.action)
            setarr(props.show.data.action)
            setroom(props.class.roomData)
            setclass(props.class.classData)
        }else{
            Getstudent()
            getGrade()
        }
    },[props.show.data])
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
            <Input placeholder="Basic usage" value={val} onChange={(e)=>{
                setval(e.target.value)
            }} />
            <Select
                style={{ width: 200 }}
                placeholder="Select a person"
                value={select1}
                onChange={(e)=>{
                    console.log(e)
                    setselect1(e)
                }}
            >
                {
                    room&&room.map((item,index)=>{
                        return <Option value={item.room_text}>{item.room_text}</Option>
                    })
                }
            </Select>,
            <Select
                style={{ width: 200 }}
                placeholder="Select a person"
                value={select2}
                onChange={(e)=>{
                    console.log(e)
                    setselect2(e)
                }}
            >
                {
                    alass&&alass.map((item,index)=>{
                        return <Option value={item.grade_name}>{item.grade_name}</Option>
                    })
                }
                
            </Select>,
            <Button type="primary" onClick={()=>{
                console.log(select1,select2,val,arr)
                let obj = [];
                if(val){
                    // console.log(obj)
                    let v = arr.find(item=>{
                        return item.student_name === val
                    })
                    if(v){
                        obj.push(v)
                    }
                    setdata(obj)
                }else if(select1){
                    setdata(arr.filter(item=>item.room_text == select1))
                }else if(select2){
                    setdata(arr.filter(item=>item.grade_name == select2))
                }else{
                    setdata(arr)
                }
                
            }}>搜索</Button>
            <Button type="primary" onClick={()=>{
                setselect1('')
                setselect2('')
                setval('')
            }}>重置</Button>
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
    },
    getGrade(){
        dispatch({
          type:"class/gtade", //获取班级展示
        })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(ClassStudent);
