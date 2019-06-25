import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import { Select,Button,Icon,Radio} from 'antd';
import styles from './index.css'
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function QuesList(props) {
    let [size,newSize] = React.useState({
        data:'全部'
    })

    function onChange(e){
      console.log(e.target.value);
      newSize({
        data:e.target.value
      })
    };

  useState(()=>{
   
  },[])
  useEffect(()=>{
    let {examType,allQue} = props;
    examType()
    allQue()
    console.log(props)

  }, []);
    return (<div className={styles.content}>
        <span>试卷列表</span><br/>
        <div className={styles.top}>
            <div className={styles.con}>
                <span>考试类型:</span>
                <Select defaultValue='' style={{ width: 120 }} onChange={handleChange}>
                    {
                        props.styleExam1 && props.styleExam1.map((item,index)=><Option value={item.exam_id} key={index}>{item.exam_name}</Option>)
                    }
                </Select>
                <span>课程:</span>
                <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
                    {
                        props.styleExam2 && props.styleExam2.map((item,index)=><Option value={item.subject_id} key={index}>{item.subject_text}</Option>)
                    }
                </Select>
                <Button type="primary"><Icon type="search"/>查询</Button>
            </div>
        </div>
        <div className={styles.bot}>
            <div className={styles.shang}>
                <span>试卷列表</span>
                <Radio.Group value={size.data} onChange={onChange} style={{ marginBottom: 16 }} className={styles.ding}>
                    <Radio.Button value="全部">全部</Radio.Button>
                    <Radio.Button value="进行中">进行中</Radio.Button>
                    <Radio.Button value="已结束">已结束</Radio.Button>
                </Radio.Group>
            </div>
            <div className={styles.xia}>
                <ul>
                  <li>试卷信息</li>
                  <li>班级</li>
                  <li>创建人</li>
                  <li>开始时间</li>
                  <li>结束时间</li>
                  <li>操作</li>
                </ul>
            </div>
            {
              props.data && props.data.map((item,index) =><div className={styles.every} key={index}>
              <ul>
                <li>{item.title}</li>
                <li>
                  {
                    item.grade_name.map((citem,cindex)=><span key={cindex}>{citem}</span>)
                  }
                </li>
                <li>{item.user_name}</li>
                <li>{new Date(item.start_time * 1).getFullYear() + '-' + (new Date(item.start_time * 1).getMonth()+1 < 10 ? '0'+(new Date(item.start_time * 1).getMonth()+1) : new Date(item.start_time * 1).getMonth()+1) + '-' + new Date(item.start_time * 1).getDate()}</li>
                <li>{new Date(item.end_time * 1).getFullYear() + '-' + (new Date(item.end_time * 1).getMonth()+1 < 10 ? '0'+(new Date(item.end_time * 1).getMonth()+1) : new Date(item.end_time * 1).getMonth()+1) + '-' + new Date(item.end_time * 1).getDate()}</li>
                <li onClick={()=>{
                  console.log(item.exam_exam_id)
                  let pathname = '/exam/ExamDetail?id='+item.exam_exam_id
                  props.history.push(pathname)
                }}>详情</li>
              </ul>
            </div>)
            }
            
        </div>
    </div>
    )
  }
  // props的类型检查
  QuesList.propTypes = {

  }
  // props的默认值
  QuesList.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state.user
  }
}

const mapDisaptchToProps = dispatch=>{
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
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(QuesList);

