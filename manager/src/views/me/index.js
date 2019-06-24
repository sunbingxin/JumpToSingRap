import { connect } from 'dva'
import axios from 'axios'
import React ,{useEffect,useState} from 'react';

function IndexPage(props){
    let [imgs,setimg] = useState('')
    useEffect(function(){
        console.log(props.data)
        props.data&&setimg(props.data[0].path)
        console.log(imgs)
    },[props.data])
    return <div>
        <input type='file' onChange={(e)=>{
                let files = e.target.files;
                // 创建一个formData
                let form = new FormData();
                for (let i=0,len=files.length; i<len;i++){
                    form.append(files[i].name, files[i]);
                    props.append(form)
                }
        }} />
        <img src={imgs}/>
    </div>
    
}
function mapStateToprops(state){
    return {
        ...state.user
    }
}
function mapDispatchToprosp(dispatch){
    return {
        append(payload){
            dispatch({
                type:'user/appendImg',
                payload:payload
            })
        }
    }
}
export default connect(mapStateToprops,mapDispatchToprosp)(IndexPage)