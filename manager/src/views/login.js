
import { connect } from 'dva';
import styles from './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 
import React, { Component } from 'react'
class IndexPage extends Component {
  state={
    user_name:'',
    user_pwd:''
  }
  render() {
    return (
      <div className={styles.warp}>
        <Form className="login-form" className={styles.box}>
          <Form.Item className={styles.input1}>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
                onChange={this.change_username}
              />
          </Form.Item>
          <Form.Item  className={styles.input1}>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
                onChange={this.change_userpwd}
              />
          </Form.Item>
          <Form.Item className={styles.btn}>
            <div className={styles.flex}>
            <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            </div>
          </Form.Item>
          <Form.Item  className={styles.btns}>
            <Button type="primary" htmlType="submit" className="login-form-button"  className={styles.button}>
              <a href="/#/main">登陆</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
  change_username=(e)=>{
    this.setState({
      user_name:e.target.value
    })
    console.log(this.state.user_name)
  }
  change_userpwd=(e)=>{
    this.setState({
      user_pwd:e.target.value
    })
    console.log(this.state.user_pwd)
  }
  // login=()=>{
  //   let {user_name,user_pwd} = this.state
  //   if(user_name && user_pwd){
  //     axios.post('http://169.254.12.166:7001/user/login',{
  //       "user_name":user_name,
  //       "user_pwd":user_pwd
  //     }).then((res)=>{
  //       console.log(res)
  //     })
  //   }
  // }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
