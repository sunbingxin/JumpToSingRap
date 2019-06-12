
import { connect } from 'dva';
import styles from './login.scss';
import { Form, Icon, Input, Button, Checkbox ,message } from 'antd';
import 'antd/dist/antd.css'; // or 
import React, {useState,useEffect}from 'react'
function IndexPage(props){
   // 获取login
  let {login} = props;
  
  useEffect(()=>{
    if(props.isLogin === 1){
      message.success('登陆成功')
      let pathname = decodeURIComponent(props.history.location.search.split('=')[1])
      console.log(pathname,props)
      props.history.replace('/')
    }else{
      message.error('账号密码错误')
    }
  }, [props.isLogin]);

  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log(props);
        // 调登录接口
        login({
          user_name: values.username,
          user_pwd: values.password
        })
      }
    });
  };
  // 表单校验
  const { getFieldDecorator } = props.form;
  return <div className={styles.warp}>
  <Form onSubmit={handleSubmit} className="login-form"  className={styles.box}>
    <Form.Item className={styles.input1}>
      {getFieldDecorator('username', {
        validateTrigger: 'onBlur',
        rules: [{required: true, message: '请输入正确的用户名'}],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="请输入用户名"
        />,
      )}
    </Form.Item>
    <Form.Item className={styles.input1}>
      {getFieldDecorator('password', {
        rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="请输入密码"
        />,
      )}
    </Form.Item>
    <Form.Item className={styles.input1}>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(<Checkbox>记住密码</Checkbox>)}
      <a className="login-form-forgot" href="">
        忘记密码
      </a>
      <Button type="primary" htmlType="submit" className="login-form-button">
        登陆
      </Button>
    </Form.Item>
  </Form>;
  </div>
}

// props的类型检查
IndexPage.propTypes = {

}
// props的默认值
IndexPage.defaultProps = {

}
let mapStateToProps = state=>{

  return {
    ...state.user
  }
}
let mapDispatchToProps = dispatch=>{
  return {
    login(payload){
      console.log(payload)
      dispatch({
        type:'user/logins',
        payload
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(IndexPage));
