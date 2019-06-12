import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;

function MenuComp(props){

  return <Menu
    theme="dark"
    mode="inline"
    style={{ height: '100%', borderRight: 0 }}
  >
    <SubMenu
      key="questions"
      title={
        <span>
          <Icon type="user" />
          试题管理
        </span>
      }>
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
        <Menu.Item key="4">
            <Link to="/user/add">添加用户</Link>
        </Menu.Item>
        <Menu.Item key="5">
            <Link to="/user/show">用户展示</Link>
        </Menu.Item>
    </SubMenu>
    <SubMenu
        key="sub3"
        title={
        <span>
            <Icon type="schedule" />
            考试管理
        </span>
        }
    >
        <Menu.Item key="6">
            <Link to="/marking/add">添加考试</Link>
        </Menu.Item>
        <Menu.Item key="7">
            <Link to="/marking/classify">试卷列表</Link>
        </Menu.Item>
    </SubMenu>
    <SubMenu
        key="sub4"
        title={
        <span>
            <Icon type="project" />
            班级管理
        </span>
        }
    >
        <Menu.Item key="8">
            <Link to="/class/classMetting">班级管理</Link>
        </Menu.Item>
        <Menu.Item key="9">
            <Link to="/class/classRoom">教室管理</Link>
        </Menu.Item>
        <Menu.Item key="10">
            <Link to="/class/student">学生管理</Link>
        </Menu.Item>
    </SubMenu>
    <SubMenu
        key="sub5"
        title={
        <span>
            <Icon type="project" />
            阅卷管理
        </span>
        }
    >
        <Menu.Item key="11">
            <Link to="/quertion/waitClass">待批班级</Link>
        </Menu.Item>
    </SubMenu>

  </Menu>
}

export default MenuComp;
