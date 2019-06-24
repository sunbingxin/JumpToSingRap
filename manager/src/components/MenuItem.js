import {Link} from 'dva/router';
import {Menu, Icon } from 'antd';
import {connect} from 'dva';
import {injectIntl} from 'react-intl'
const { SubMenu } = Menu;
const data=["user","alipay","android","apple","github"]
 
function MenuItem(props){
  return <Menu
  theme="dark"
  mode="inline"
  style={{ height: '100%' }}
>
{props.myView.map((item, index)=>{
      return item.child.length&&<SubMenu key={item.name} title={
        <span>
           <Icon type={data[index]} />
            {props.intl.formatMessage({id: item.name})}
        </span>
      }>{
        item.child.map((value, key)=>{
          return value.name&&<Menu.Item key={value.path}>
           <Link to={value.path}>{props.intl.formatMessage({id: value.name})}</Link>
          </Menu.Item>
        })
      }
      </SubMenu>
    })}
</Menu>
} 
const mapStateToProps = state=>{
  return {
    myView: state.user.myView
  }
}
export default injectIntl(connect(mapStateToProps)(MenuItem));
