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
        let {data}=await answerQuestion(1)
        
 
        this.setState({
            isRender:true,
            string:data.pro_str,
            left_id:data.left_id,
            right_id:data.right_id
        })
        console.log(this.state);
    }
    turnNo= ()=>{
        let no=document.querySelector(".question_no")
        no.style.opacity=0.7
        no.style.WebkitTransform="scale(0.9)"
        no.style.transition="0.4s all"
        setTimeout(async()=>{
          no.style="none"
          no.style.transition="0.4s all"
         let res=await answerQuestion(this.state.left_id)
         if(this.state.right_id===0&&this.state.left_id===0){
            return
        }else{
            console.log(res);
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
         
          let res=await answerQuestion(this.state.right_id)
          if(this.state.right_id===0&&this.state.left_id===0){
              return
          }else{
            console.log(res);
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
    render() {
        let begin=<div>他/她 是否是党的第一代领导集体？</div>
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
