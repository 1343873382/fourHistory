import React, { Component } from 'react'

import "./guide.scss"
import {showArea} from "../../api/index"
export default class Guide extends Component {
     constructor(props){
        super(props);
        this.state={
            isRender:false,
            array:[],
            index:1
        }
     }
      
     async  componentDidMount(){
        this.changeStyle(0)
        
        let openid=localStorage.getItem("openid")
        let area="figure_area"
        let {data:{guides}}= await showArea(openid,area)
     
        this.setState({
            array:guides,
            isRender:true
        })
        
        console.log(this.state.array[1].road);
       }
       trunBack=()=>{
           this.props.history.goBack()
       }
       changeStyle=(index)=>{
        let heads=document.querySelectorAll(".head")
        for(let i=0;i<3;i++){
         heads[i].style="none"
         heads[i].style.transition="0.4s all"
     }
        heads[index].style.height="50px";
        heads[index].style.zIndex=1;
        heads[index].style.fontSize="15px";
        heads[index].style.WebkitTransform="translateY(-10px)"
        heads[index].style.transition="0.4s all"
        heads[index].style.paddingTop="8px";
        heads[index].style.backgroundColor="#e4c388"
       }
       turnPeople=async()=>{  
       
           let index=0;
           this.changeStyle(index)
           let openid=localStorage.getItem("openid")
           let area="figure_area"
           let {data:{guides}}=await showArea(openid,area)
        
           this.setState({
            isRender:true,
            index:1,
               array:guides
           })
           console.log(this.state.array);
           console.log(this.state.array[1].road);
           let res=await showArea(openid,area)
           console.log(res);
       }
       turnThing=async()=>{
       
        let index=1;
           this.changeStyle(index)
           let openid=localStorage.getItem("openid")
           let area="event_area"
           let {data:{guides}}=await showArea(openid,area)
        
           this.setState({
            isRender:true,
            index:1,
               array:guides
           })
           console.log(this.state.array);
      
       }
       turnMeeting=async()=>{
       
        let index=2;
           this.changeStyle(index)
           let openid=localStorage.getItem("openid")
           let area="conference_area"
           let {data:{guides}}=await showArea(openid,area)
           
           this.setState({
            isRender:true,
            index:1,
               array:guides
           })
           console.log(this.state.array);
       }
       prePage=()=>{
           console.log(this.state.isRender);
           if(this.state.index!==1){ 
               this.setState({
                   index:this.state.index-1
               })
            }else{
              return
            }
          
       }
       nextPage=()=>{
        console.log(this.state.isRender);
        if(this.state.index!==this.state.array.length){ 
            this.setState({
                index:this.state.index+1
            })
         }else{
            return
         }
       
    }
    render() {
        let before0=<div>毛泽东</div>
        let before1=<div>
            一、党的第一代领导集体 二、曾担任过中华人民共和国主席 三、没有参加中共一大 四、书写了《论共产党员的修养》
        </div>
        let before2=<div>毛泽东同志常说：“我一生最大的爱好是读书。”“饭可以一日不吃，觉可以一日不睡，书不可以一日不读”。不管是在大革命时期还是在抗日战争时期，毛泽东都利用战争空隙争分夺秒地研读，把一切能利用的时间都用上,延安时期，毛泽东特别提倡在党内要形成读书学习的风气。他把读书学习叫作“攻书”。学习，除了读，还要会使用。在延安窑洞中，毛泽东创造性地撰写了马克思主义中国化的理论著作，如《矛盾论》《实践论》《论持久战》《新民主主义论》等，这不仅展现了他丰富的马克思主义理论积累，同时也展现了生动的革命实践。毛泽东的一生，是勤奋学习的一生。据记载，毛泽东保存下来的藏书达1万余种近10万册，其中有不少书籍上还留下他的批注和圈画。</div>
        return (
            <div className="guide">
                <div className="guide-title">展物指南</div>
                <div className="content-header">
                         <div className="head" onClick={this.turnPeople}>人物区(1/20)</div>
                         <div className="head" onClick={this.turnThing} >事件区(1/12)</div>
                         <div className="head" onClick={this.turnMeeting}>会议区(1/12)</div>
                   </div>
               <div className="guide-content">
                   <div className="guide-title">
                       <div> {this.state.isRender===false?before0:this.state.array[this.state.index-1].title}</div>
                     
                   </div>
                    <div className="guide-symbol"></div>
                  <div className="content-story">
                       <div className="attention">路线提示</div>
                       <div className="attention-content">
                       <div>{this.state.isRender===false?before1:this.state.array[this.state.index-1].road}</div>
                          {/* {this.state.array[1].road} */}
                       </div>
                         <div className="story">人物故事</div>
                         <div className="story-content">
                             <div> {this.state.isRender===false?before2:this.state.array[this.state.index-1].story}</div>
                        
                         </div>
                  </div>
                  <div className="content-page">
                      <div onClick={this.prePage}>上一页</div>
                      <div>{this.state.index}/{this.state.array.length}</div>
                      <div onClick={this.nextPage}>下一页</div>
                  </div>
               </div>
               <div className="guide-back" onClick={this.trunBack}>
                   
                  <div></div>
               </div>
            </div>
        )
    }
}
