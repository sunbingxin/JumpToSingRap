import React,{useEffect,useState} from 'react'
import { connect} from 'dva';
function Index(props){ 
    let {imgSrc,srcImg}=props;
    let [imgs,setimgs]=useState("");
    let [canvas,setCanvas]=useState("");
    let [newImg,setnewImg]=useState("");
    let [newTopImg,setnewTopImg]=useState("");
    let [change,setChange]=useState("");
    useEffect(()=>{
        if(!srcImg){
            props.base64();
        }
    },[imgSrc,srcImg])
  return <div>
      <input type="file" onChange={(e)=>{
        setChange(e.target.files);
      }}/>
      {imgs&&<img style={{width:"100px",height:"100px",display:"none"}} ref={ref=>setnewTopImg(ref)}  src={imgs}></img>}
      <button disabled={imgSrc?false:true} onClick={()=>{
           props.history.replace("/exam/add");
      }}>更换头像</button>

     <canvas ref={ref=>{
         setCanvas(ref);
         changeCan();
     }} width="340" height="220">
     您的浏览器不支持canvas，请更换浏览器.
     </canvas>
     <img style={{width:"200px",height:"200px",display:"none"}} ref={ref=>setnewImg(ref)}  src="http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg"/>
  </div>
  function changeCan(){
    let cxt=canvas&&canvas.getContext('2d');
    if(srcImg){
        newImg.src=srcImg;
      cxt.drawImage(newImg,0,0,1000,633,0,0,333,211);
     if(change){
        let files = change;
        var reader = new FileReader();
        reader.onload = function(){
            setimgs(this.result);
            if(newTopImg){
             cxt.drawImage(newTopImg,0,0,533,299,150,25,178,100);
             if(!imgSrc){
                props.changeImg({base64:canvas.toDataURL()})
             }
            }
        }
        reader.readAsDataURL(files[0]);
     }
  }
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
     },
     base64(){
         dispatch({
             type:"user/base64"
         })
     }
 }
}
export default connect(mapStateToProps,mapDispatchProps)(Index);