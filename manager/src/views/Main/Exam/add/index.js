import React from 'react';
import { connect } from 'dva';
import { Layout, Breadcrumb} from 'antd';
const { Content } = Layout;
function IndexPage() {
  return    <Layout style={{ padding: '0 24px 24px' }}>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>添加试题</Breadcrumb.Item>
  </Breadcrumb>
  <Content
    style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
   添加试题
  </Content>
</Layout>
}

export default connect()(IndexPage);
