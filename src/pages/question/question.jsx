import React, { Component } from 'react'
import "./question.scss"
import {Link} from "react-router-dom"
import {answerQuestion} from "../../api/index"
export default class Question extends Component {
    constructor(props){
        super(props)
        this.state={
            isRender:false,
            string:"",
            left_id:"",
            right_id:""

        }
    }
    async componentDidMount(){
        let id=sessionStorage.getItem("id")
        let {data}=await answerQuestion(id)
        
 
        this.setState({
            isRender:true,
            string:data.pro_str,
            left_id:data.left_id,
            right_id:data.right_id
        })
       
    }
    turnNo= ()=>{
        let no=document.querySelector(".question_no")
        no.style.opacity=0.7
        no.style.WebkitTransform="scale(0.9)"
        no.style.transition="0.4s all"
        setTimeout(async()=>{
          no.style="none"
          no.style.transition="0.4s all"
         let res=await answerQuestion(this.state.right_id)
         console.log(res);
         if(!res.data.right_id){
            sessionStorage.setItem("memorialHallId",res.data.memorialHallId)
            sessionStorage.setItem("memorialHallContent",res.data.memorialHallContent)
            sessionStorage.setItem("title",res.data.title)
            this.props.history.push("/result")
        }else{
          
            this.setState({
               isRender:true,
               string:res.data.pro_str,
               left_id:res.data.left_id,
               right_id:res.data.right_id
           })
           console.log(this.state);
        }
       
        },400)
    }
    turnYes=()=>{
        let yes=document.querySelector(".question_yes")
        yes.style.opacity=0.7
        yes.style.WebkitTransform="scale(0.9)"
        yes.style.transition="0.4s all"
        setTimeout(async()=>{
          yes.style="none"
          yes.style.transition="0.4s all"
         
          let res=await answerQuestion(this.state.left_id)
          console.log(res);
          if(!res.data.right_id){
            sessionStorage.setItem("memorialHallId",res.data.memorialHallId)
            sessionStorage.setItem("memorialHallContent",res.data.memorialHallContent)
            sessionStorage.setItem("title",res.data.title)
            this.props.history.push("/result")
          }else{
           
            this.setState({
               isRender:true,
               string:res.data.pro_str,
               left_id:res.data.left_id,
               right_id:res.data.right_id
           })
          
          }
        
        },400)
    }
    render() {
         var begin
         let id=sessionStorage.getItem("id")
         if( id===1)
         {begin=<div>他/她 是否是党的第一代领导集体？</div>}
         if(id===57){
            begin=<div>该事件是否发生在改革开放前？</div>
         }
         if(id===77){
            begin=<div>该会议是否在举办在1979年前？</div>
         }
        return (
            <div className="question">
                <Link to="/rule">
                <div className="rule-book"></div>
                    </Link>
                    <Link to="/guide">
                        <div className="guide-book"></div>
                    </Link>
                    <div className="question-border">
                    {this.state.isRender===false?begin:this.state.string}
                    </div>
                    <div className="question_choose">
                        <div className="question_yes" onClick={this.turnYes}></div>
                        <div className="question_no" onClick={this.turnNo}></div>
                    </div>
            </div>
        )
    }
}
