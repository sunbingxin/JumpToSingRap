import { connect } from 'dva';
import styles from './login.css';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import React, { useEffect } from 'react'

function LoginPage(props){
  useEffect(()=>{
    if(props.isLoad === 1){
      message.success('登陆成功');
     let pathname = decodeURIComponent(props.history.location.search.split("=")[1])
     props.history.replace(pathname);
    }else if(props.isLoad === -1){
      message.error ('登陆失败');
    }
  },[props.isLoad]);

  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        let {login} = props;
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
  <Form onSubmit={handleSubmit}  className={styles.box}>
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
      <Button type="primary" htmlType="submit" className="">
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
  return state.user
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
