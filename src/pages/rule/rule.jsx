import React, { Component } from 'react'
import "./rule.scss"
export default class Rule extends Component {
    constructor(props){
        super(props)
    }
    goBack=()=>{
        this.props.history.goBack()
     
    }
    render() {
        return (
            <div className="rule">
                 <div className="rule-bt" onClick={this.goBack}></div>
            </div>
        )
    }
}
