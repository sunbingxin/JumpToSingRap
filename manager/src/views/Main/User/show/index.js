import React ,{useEffect,useState} from 'react';
import { connect} from 'dva';
import { Typography,Radio ,Table, Divider, Tag} from 'antd';
import style from './index.css'
const { Title } = Typography;
function Usershow(props) {
  
    let {user} = props
    let [data,setdata] = useState([])
    let [username,setusername] = useState('用户数据')
    
    useEffect(()=>{
      if(props.data1){
        setdata(props.data1.action1)
      }else{
        user()
      }
          
    },[props.data1])
    
    let columns = [
        {
            title1: '用户数据',
            key: 'action',
            render: (text) => (
              <div className={style.list}>
                <span>{text.user_name}</span>
                <span>{text.user_pwd}</span>
                <span>{text.identity_text}</span>
              </div>
            ),
          },
    ]
    let columns2 = [
      {
          title: '身份数据',
          key: 'action',
          render: (text) => (
            <div className={style.list}>
              <span>{text.identity_text}</span>
            </div>
          ),
        },
  ]
  let columns3 = [
    {
        title: 'api接口权限',
        key: 'action',
        render: (text) => (
          <div className={style.list}>
            <span>{text.api_authority_text}</span>
            <span>{text.api_authority_url}</span>
            <span>{text.api_authority_method}</span>
          </div>
        ),
      },
]
let columns4 = [
  {
      title: '身份和api接口关系',
      key: 'action',
      render: (text) => (
        <div className={style.list}>
          <span>{text.identity_text}</span>
          
          <span>{text.api_authority_text}</span>
          <span>{text.api_authority_url}</span>
        </div>
      ),
    },
]
let columns5 = [
  {
      title: '试图接口权限',
      key: 'action',
      render: (text) => (
        <div className={style.list}>
                <span>{text.identity_text}</span>
                <span>{text.user_name}</span>
              </div>
      ),
    },
]
let columns6 = [
  {
      title: '身份和试图权限关系',
      key: 'action',
      render: (text) => (
        <div className={style.list}>
          <span>{text.identity_text}</span>
          <span>{text.view_authority_text}</span>
          <span>{text.view_id}</span>
        </div>
      ),
    },
]
let [list,setlist] = useState(columns)
  return  <div className={style.userBox}>
      <Title level={2}>用户展示</Title>
      <div>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a" onClick={()=>{
              setdata(props.data1.action1)
              setusername('用户数据')
              setlist(columns)
            }}>用户数据</Radio.Button>
            <Radio.Button value="b" onClick={()=>{
              setdata(props.data1.action2)
              setusername('身份数据')
              setlist(columns2)
            }}>身份数据</Radio.Button>
            <Radio.Button value="c" onClick={()=>{
              setdata(props.data1.action3)
              setusername('api接口权限')
              setlist(columns3)
            }}>api接口权限</Radio.Button>
            <Radio.Button value="d" onClick={()=>{
              setdata(props.data1.action4)
              setusername('身份和api接口关系')
              setlist(columns4)
            }}>身份和api接口关系</Radio.Button>
            <Radio.Button value="e" onClick={()=>{
              setdata(props.data1.action5)
              setusername('视图接口权限')
              setlist(columns5)
            }}>试图接口权限</Radio.Button>
            <Radio.Button value="f" onClick={()=>{
              setdata(props.data1.action6)
              setusername('身份和视图权限关系')
              setlist(columns6)
            }}>身份和试图权限关系</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        {console.log(props)}
        <Table columns={list} dataSource={data} />  
      </div>
  </div>
}
let mapStateToProps=state=>{
  return {
    ...state.show
  }
}
let mapdispatchToProps=dispatch=>{
  return {
      user(){
          dispatch({
              type:'show/userAlllist'
          })
      }
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(Usershow);
