import {Link} from 'dva/router';
import {Menu, Icon } from 'antd';
import {injectIntl} from 'react-intl'
const { SubMenu } = Menu;
function MenuItem(props){
  return <Menu
  mode="inline"
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
    title={
      <span>
        <Icon type="user" />
        {props.intl.formatMessage({id: 'router.user'})}
      </span>
    }
  >
    <Menu.Item key="4">
    <Link to="/user/adduser">
    {props.intl.formatMessage({id: 'router.user.adduser'})}
    </Link>
    </Menu.Item>
    <Menu.Item key="5">
    <Link to="/user/show">
    {props.intl.formatMessage({id: 'router.user.show'})}
    </Link>
    </Menu.Item>
  </SubMenu>

  <SubMenu
    title={
      <span>
        <Icon type="user" />
        {props.intl.formatMessage({id: 'router.marking'})}        
      </span>
    }
  >
    <Menu.Item key="6">
    <Link to="/marking/add">
    {props.intl.formatMessage({id: 'router.marking.add'})}
    </Link>
    </Menu.Item>
    <Menu.Item key="7">
    <Link to="/marking/lists">
    {props.intl.formatMessage({id: 'router.marking.lists'})}
    </Link>
    </Menu.Item>
  </SubMenu>
  <SubMenu
    title={
      <span>
        <Icon type="user" />
        {props.intl.formatMessage({id: 'router.class'})} 
      </span>
    }
  >
    <Menu.Item key="11">
    <Link to="/class/classmanage">
    {props.intl.formatMessage({id: 'router.class.classmanage'})} 
    </Link>
    </Menu.Item>
    <Menu.Item key="22">
     <Link to="/class/teammanage">
    {props.intl.formatMessage({id: 'router.class.teammanage'})}       
     </Link>
    </Menu.Item>    
    <Menu.Item key="33">
    <Link to="/class/student">
    {props.intl.formatMessage({id: 'router.class.student'})} 
    </Link>
    </Menu.Item>
  </SubMenu>
  <SubMenu
    title={
      <span>
        <Icon type="user" />
        阅卷管理
      </span>
    }
  >
    <Menu.Item key="8">
    <Link to="/paper/classlist">待批班级</Link>
    </Menu.Item>
  </SubMenu>
</Menu>
} 

export default injectIntl(MenuItem)
