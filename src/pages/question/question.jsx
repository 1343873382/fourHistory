import React, { Component } from 'react'
import "./question.scss"
import {Link} from "react-router-dom"
export default class Question extends Component {
    turnNo=()=>{
        let no=document.querySelector(".question_no")
        no.style.opacity=0.7
        no.style.WebkitTransform="scale(0.9)"
        no.style.transition="0.4s all"
        setTimeout(()=>{
          no.style="none"
          no.style.transition="0.4s all"
        },400)
    }
    turnYes=()=>{
        let yes=document.querySelector(".question_yes")
        yes.style.opacity=0.7
        yes.style.WebkitTransform="scale(0.9)"
        yes.style.transition="0.4s all"
        setTimeout(()=>{
          yes.style="none"
          yes.style.transition="0.4s all"
        },400)
    }
    render() {
        return (
            <div className="question">
                <Link to="/rule">
                <div className="rule-book"></div>
                    </Link>
                    <Link to="/guide">
                        <div className="guide-book"></div>
                    </Link>
                    <div className="question-border">
                    这位革命先辈是 否参加过十五届、 九中全会？
                    </div>
                    <div className="question_choose">
                        <div className="question_yes" onClick={this.turnYes}></div>
                        <div className="question_no" onClick={this.turnNo}></div>
                    </div>
            </div>
        )
    }
}
