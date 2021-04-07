import React, { Component } from 'react'
import "./question.scss"
import {Link} from "react-router-dom"
export default class Question extends Component {
    render() {
        return (
            <div className="question">
                <Link to="/rule">
                <div className="rule-book"></div>
                    </Link>
                    <Link to="/guide">
                        <div className="guide-book"></div>
                    </Link>
                    <div className="question_choose">
                        <div className="question_yes"></div>
                        <div className="question_no"></div>
                    </div>
            </div>
        )
    }
}
