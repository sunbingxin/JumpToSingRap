
import { connect } from 'dva';
import styles from './login.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 
import React, {useState,useEffect}from 'react'
function IndexPage(props){
   // 获取login
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
    <Form.Item className={styles.input1}>
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
    <Form.Item className={styles.input1}>
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

// props的类型检查
IndexPage.propTypes = {

}
// props的默认值
IndexPage.defaultProps = {

}
let mapStateToProps = state=>{
  console.log('state...',state)
  return {}
}
let mapDispatchToProps = dispatch=>{
  return {
    login(payloag){
      console.log(payloag)
      dispatch({
        type:'user/logins',
        payloag
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(IndexPage));
