import React, { Component } from 'react'
import "./guide.scss"
export default class Guide extends Component {
     constructor(props){
        super(props);
        this.state={
            people:{

                num:1
            },
            thing:{
                num:1
            },
            communiacte:{
                num:1
            }
        }
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
        heads[index].style.fontSize="18px";
        heads[index].style.WebkitTransform="translateY(-10px)"
        heads[index].style.transition="0.4s all"
        heads[index].style.paddingTop="10px";
        heads[index].style.backgroundColor="#e4c388"
       }
       turnPeople=()=>{  
           let index=0;
           this.changeStyle(index)

       }
       turnThing=()=>{
        let index=1;
           this.changeStyle(index)
       }
       turnMeeting=()=>{
        let index=2;
           this.changeStyle(index)
       }
    render() {
        return (
            <div className="guide">
                <div className="guide-title">展物指南</div>
                <div className="content-header">
                         <div className="head" onClick={this.turnPeople}>人物区({this.state.people.num}/10)</div>
                         <div className="head" onClick={this.turnThing} >事件区({this.state.people.num}/10)</div>
                         <div className="head" onClick={this.turnMeeting}>会议区({this.state.people.num}/10)</div>
                   </div>
               <div className="guide-content">
                   <div className="guide-title">
                       中国共产党成立
                   </div>
                    <div className="guide-symbol"></div>
                  <div className="content-story">
                       <div className="attention">路线提示</div>
                       <div className="attention-content">
                           <div>asdsadasd撒旦撒打算符数飞洒打算d</div>
                           <div>打算的发多少个第三方撒撒d</div>
                           <div>阿萨的阿萨管道施工的风格是反对法撒旦ask的哈看</div>
                       </div>
                         <div className="story">人物故事</div>
                         <div className="story-content">
                             <div>asdg 撒旦hi撒旦hi是否会少一点u安徽看见撒旦计划卡的时间安康独家卡省的，暗杀是可见的喀什看见撒旦卡斯抠脚大汉卡萨丁和喀什觉得喀什角动量时间利空打击就</div>
                         </div>
                  </div>
                  <div className="content-page">
                      <div>上一页</div>
                      <div>{this.state.people.num}/10</div>
                      <div>下一页</div>
                  </div>
               </div>
               <div className="guide-back" onClick={this.trunBack}>
                   
                  <div></div>
               </div>
            </div>
        )
    }
}
