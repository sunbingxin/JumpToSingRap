import React,{useEffect,useState} from 'react'
import { connect} from 'dva';
function Index(props){ 
    let {imgSrc}=props;
    let [imgs,setimgs]=useState("");
    useEffect(()=>{
        
    },[imgSrc])
  return <div>
      <input type="file" onChange={(e)=>updataImag(e)}/>
      {imgs&&<img style={{width:"200px",height:"200px"}} src={imgs}></img>}
      <button disabled={imgSrc?false:true} onClick={()=>{
           props.history.replace("/exam/add");
      }}>更换头像</button>
  </div>
  function updataImag(e){
    let files = e.target.files;
    var reader = new FileReader();
    reader.onload = function(){
        setimgs(this.result);
        props.changeImg({base64:this.result})
    }
    reader.readAsDataURL(files[0]);
  }
}
let mapStateToProps=state=>{
  return {...state.user}
}
let mapDispatchProps=dispatch=>{
 return {
     changeImg(payload){
         dispatch({
             type:"user/changeImg",
             payload,
         })
     }
 }
}
export default connect(mapStateToProps,mapDispatchProps)(Index);