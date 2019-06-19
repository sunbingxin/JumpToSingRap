import {Link} from 'dva/router';
import {Menu, Icon } from 'antd';
import {injectIntl} from 'react-intl'
const { SubMenu } = Menu;
function MenuItem(props){
  return <Menu
  mode="inline"
  defaultSelectedKeys={['1']}
  style={{ height: '100%' }}
>
  <SubMenu
    title={
      <span>
        <Icon type="user" />
        {props.intl.formatMessage({id: 'router.exam'})}
      </span>
    }
  >
    <Menu.Item key="1">
    <Link to="/exam/add">
    {props.intl.formatMessage({id: 'router.exam.add'})}
    </Link>
    </Menu.Item>
    <Menu.Item key="2">
    <Link to="/exam/classify">
    {props.intl.formatMessage({id: 'router.exam.classify'})}
    </Link>
    </Menu.Item>
    <Menu.Item key="3">
    <Link to="/exam/test">
    {props.intl.formatMessage({id: 'router.exam.test'})}
    </Link>
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
    <Menu.Item key="4">
    <Link to="/user/adduser">添加用户</Link>
    </Menu.Item>
    <Menu.Item key="5">
    <Link to="/user/show">用户管理</Link>
    </Menu.Item>
  </SubMenu>

  <SubMenu
    title={
      <span>
        <Icon type="user" />
        考试管理
      </span>
    }
  >
    <Menu.Item key="6">
    <Link to="/marking/add">添加考试</Link>
    </Menu.Item>
    <Menu.Item key="7">
    <Link to="/marking/lists">考试列表</Link>
    </Menu.Item>
  </SubMenu>
  <SubMenu
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
    <Link to="/class/student">学生管理</Link>
    </Menu.Item>
  </SubMenu>
</Menu>
} 

export default injectIntl(MenuItem)