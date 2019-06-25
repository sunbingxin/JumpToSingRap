import { connect } from 'dva'
import axios from 'axios'
import React ,{useEffect,useState} from 'react';
import { changeImgs } from '../../services';

function IndexPage(props){
    let [imgs,setimg] = useState('')
    let [data,setdata] = useState('')

    useEffect(function(){
        props.data&&setimg(props.data[0].path)
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
        <canvas ref={ref=>{
            setdata(ref)
            changeImgs()
            }}>
            
        </canvas>
    </div>
    function changeImgs(){
        let img = new Image()
        let cxt = data&&data.getContext('2d')
        props.base('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg')
        img.src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
        img.onload = function(){
            cxt&&cxt.drawImage(img,0,0,600,300,0,0,300,150)
        }
        if(imgs){
            let images = new Image()
            images.src = imgs
            console.log(imgs)
            images.onload = function(){
                cxt&&cxt.drawImage(images,0,0,533,300,100,100,50,50)
                console.log(data.toDataURL())
            }
        }
    }
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
        },
        base(payload){
            dispatch({
                type:'user/base',
                payload:payload
            })
        }
    }
}
export default connect(mapStateToprops,mapDispatchToprosp)(IndexPage)