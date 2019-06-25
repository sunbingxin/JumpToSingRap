import React,{useState} from 'react'
import { connect} from 'dva';
function Index(props){ 
    let [newfile,setNewfile]=useState("");
    let {changeImg,base64,imgSrc,srcImg}=props;
     function Handlebars(ref){
         if(ref){
           var ctx = ref.getContext("2d");
           let img=new Image();
           base64();
           srcImg?img.src=srcImg:null;
           img.onload=function (){
            ctx.drawImage(img, 0, 0,1920,1020,0,0, 300, 150);
           }
           if(newfile){
               let files = newfile;
               var reader = new FileReader();
               let imgs=new Image();
               reader.onload=function(){
                  imgs.src=this.result;
                  imgs.onload=function(){
                    ctx.drawImage(imgs, 0, 0,180,1080,20,20, 215, 108);
                    imgSrc?null:changeImg({base64:ref.toDataURL()})
                  }
               }
               reader.readAsDataURL(files[0]);
           }
         }
     }
    return <div>
        <canvas style={{width:"480px",height:"255px"}} ref={(ref)=>Handlebars(ref)}></canvas>
        <input onChange={(e)=>setNewfile(e.target.files)} type="file"/>
        {
            imgSrc?<button onClick={()=>{
                props.history.replace("/exam/add");
            }} >上传</button>:null
        }
    </div>

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