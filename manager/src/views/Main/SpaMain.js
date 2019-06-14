import React from 'react';
import { connect } from 'dva';
import styles from './SpaMain.css';
import { Menu,Collapse} from 'antd';
const Panel = Collapse.Panel;
function IndexPage() {
  return (
    <div className={styles.minBox}>
       <div className={styles.minHeard}>
         <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
           <div>
             <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt=""/>
             chenmanjie
              <Menu className={styles.mainMenu}>
              <Menu.Item key="1">个人中心</Menu.Item>
              <Menu.Item key="2">我的班级</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">设置</Menu.Item>
              <Menu.Item key="4">退出登陆</Menu.Item>
              </Menu>
           </div>
       </div>
      <div className={styles.mainSection}>
         <div className={styles.mainSectionLeft}>
          <Collapse expandIconPosition="right" id={styles.mainSectionLeftOne}>
           <Panel header="考试管理" key="1">
          <p><a>添加试题</a></p>
          <p><a>试题分类</a></p>
          <p><a>查看试题</a></p>
          </Panel>
          <Panel header="用户管理" key="2">
          <p><a>添加用户</a></p>
          <p><a>用户展示</a></p>
          </Panel>
          <Panel header="考试管理" key="3">
          <p><a>添加考试</a></p>
          <p><a>试卷列表</a></p>
          </Panel>
          <Panel header="班级管理" key="4">
          <p><a>班级管理</a></p>
          <p><a>学生管理</a> </p>
          <p><a>教室管理</a></p>  
          </Panel>
          <Panel header="阅卷管理" key="5">
          <p><a href="">待批班级</a></p>
          </Panel>
          </Collapse>,
         </div>
         <div className={styles.mainSectionRight}>
           <div></div> 
         </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
  
};

export default connect()(IndexPage);
