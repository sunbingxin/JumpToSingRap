import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss'

import { Select, Button, Icon } from 'antd';
const { Option } = Select;

function Classmate(props) {
  let { Classmate, data8} = props;
  const [getClassid, getClassId] = React.useState({ 
    Exaid:''
  });
  
  useState(() => {

  }, [])
  useEffect(() => {
console.log(props)
    let pathName = decodeURIComponent(props.history.location.search.split('=')[1])
    let na = decodeURIComponent(props.history.location.search.split('=')[2])
    getClassId({
      Exaid:na
    })
    console.log(pathName+'='+na)
    // 调登录接口
    Classmate(pathName.split('&')[0])

  }, [props.isLogin]);
  

  function click(e){
    let {history:{push}} = props
    // push(`/examination/ClassDetail?id=${e}`)
  }
  console.log(props)
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
 
  return (

    <div className={styles.add}>
      <div className={styles.head}>
        <div className={styles.tlt}>
          <p>状态:</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder=""
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
          </Select>
        </div>
        <div className={styles.tlt}>
          <p>班级:</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder=""
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1701B">1701B</Option>
            <Option value="1611C">1611C</Option>
            <Option value="1610A">1610A</Option>
            <Option value="1611A">1611A</Option>
            <Option value="1611B">1611B</Option>
            <Option value="1611C">1611C</Option>
            <Option value="1709B">1709B</Option>
            <Option value="1609A">1609A</Option>
            <Option value="1610B">1610B</Option>
            <Option value="1701C">1701C</Option>
            <Option value="1612A">1612A</Option>
            <Option value="1612B">1612B</Option>
            <Option value="1701E">1701E</Option>

          </Select>
        </div>
        <Button className={styles.btn} type="primary"><Icon type="search" />查询</Button>
      </div>
      <div className={styles.connect_class}>
        <div>
          <span>试卷列表</span>
        </div>
        <div className={styles.bot}>
          <li>班级</li>
          <li>姓名</li>
          <li>阅卷状态</li>
          <li>开始时间</li>
          <li>结束时间</li>
          <li>成材率</li>
          <li>操作</li>
        </div>
        {
          data8 && data8.map((item, index) => {
            return <div className={styles.bot_le} key={index}>
              <span>{getClassid.Exaid}</span>
              <span>{item.student_name}</span>
              <span>{item.status}</span>
              <span>{item.end_time}</span>
              <span>{item.start_time}</span>
              <span></span>
              <span onClick={()=>{
              click(item.exam_student_id)
            }}>批卷</span>
            </div>
          })
        }
      </div>
      
    </div>
  )
}
// props的类型检查page_id
Classmate.propTypes = {

}
// props的默认值
Classmate.defaultProps = {

}
const mapStateToProps = state => {
  console.log('state...', state);
  return {
    ...state.show
  }
}
const mapDisaptchToProps = dispatch => {
  return {
    Classmate(payload) {
      dispatch({
        type: 'show/Classmate',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Classmate);
