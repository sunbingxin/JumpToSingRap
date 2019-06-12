import { connect } from 'dva';
import styles from './login.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { useEffect,useState } from 'react'

function LoginPage(props){
  let {login} = props;
  useEffect(()=>{
    // login({
    //   user_name: 'chenmanjie',
    //   user_pwd: 'Chenmanjie123!'
    // })
  }, []);

  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
          placeholder="Username"
        />,
      )}
    </Form.Item>
    <Form.Item className={styles.input2}>
      {getFieldDecorator('password', {
        rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />,
      )}
    </Form.Item>
    <Form.Item className={styles.btn}>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(<Checkbox>Remember me</Checkbox>)}
      <a className="login-form-forgot" href="">
        Forgot password
      </a>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      Or <a href="">register now!</a>
    </Form.Item>
  </Form>;
  </div>
}
//props的类型检查
LoginPage.propTypes = {

};
//props的默认值
LoginPage.defaultProps={
  
}

const mapStateTopProps=state=>{
  return {}
}
const mapDispatchTopProps=dispatch=>{
  return {
    login(payload){
      dispatch({
        type:"user/login",
        payload,
      })
    }
  }
}
export default connect(mapStateTopProps,mapDispatchTopProps)((Form.create())(LoginPage));