import React, { Component } from 'react'
import "./rule.scss"
export default class Rule extends Component {
    
    goBack=()=>{
        this.props.history.goBack()
     
    }
    render() {
        return (
            <div className="rule">
                <div className="mask"><div className="logo"></div><div className="info"></div></div>
                <div className="rule-content"></div>
                 <div className="rule-bt" onClick={this.goBack}></div>
            </div>
        )
    }
}
