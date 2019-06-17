import {Link} from 'dva/router';
import {Menu, Icon } from 'antd';
const { SubMenu } = Menu;
function MenuItem(){
  return <Menu
  mode="inline"
  defaultSelectedKeys={['1']}
  style={{ height: '100%' }}
>
  <SubMenu
    key="sub1"
    title={
      <span>
        <Icon type="user" />
        考试管理
      </span>
    }
  >
    <Menu.Item key="1">
    <Link to="/exam/add">添加试题</Link>
    </Menu.Item>
    <Menu.Item key="2">
    <Link to="/exam/classify">试题分类</Link>
    </Menu.Item>
    <Menu.Item key="3">
    <Link to="/exam/test">查看试题</Link>
    </Menu.Item>
  </SubMenu>

  <SubMenu
    key="sub2"
    title={
      <span>
        <Icon type="user" />
        用户管理
      </span>
    }
  >
    <Menu.Item key="2">
    <Link to="/user/adduser">添加用户</Link>
    </Menu.Item>
    <Menu.Item key="1">
     <Link to="/user/show">用户管理</Link>
    </Menu.Item>    
  </SubMenu>

  <SubMenu
    key="sub3"
    title={
      <span>
        <Icon type="user" />
        班级管理
      </span>
    }
  >
    <Menu.Item key="11">
    <Link to="/class/classmanage">班级管理</Link>
    </Menu.Item>
    <Menu.Item key="22">
     <Link to="/class/teammanage">教室管理</Link>
    </Menu.Item>    
    <Menu.Item key="33">
     <Link to="/class/studmange">学生管理</Link>
    </Menu.Item>   
  </SubMenu>
</Menu>
} 

export default MenuItem