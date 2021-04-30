import React, { Component } from 'react'
import "./hall.scss"
import Guide from '../../component/guide/guide.jsx';
import { Link } from "react-router-dom"
export default class Hall extends Component {
    state={
        isShow:false
    }
    setPeopleid = () => {
        sessionStorage.setItem("id", 1)
    }
    setMeetid = () => {
        sessionStorage.setItem("id", 77)
    }
    setThingid = () => {
        sessionStorage.setItem("id", 58)
    }
    setShow = ()=>{
        this.setState({
            isShow:true
        })
    }
    setFatherShow = (bool)=>{
        this.setState({
            isShow:bool
        })
    }
    render() {
        return (
            <div className="hall">
                <Link to="/rule">
                    <div className="hall-rule"></div>
                </Link>
                <div className="hall-guide" onClick={this.setShow}></div>
                <div className="hall-choose">
                    <Link to="/question"><div className="hall-radius" onClick={this.setPeopleid}>人物区</div></Link>
                    <Link to="/question"><div className="hall-radius" onClick={this.setThingid}>事件区</div></Link>
                    <Link to="/question"><div className="hall-radius" onClick={this.setMeetid}>会议区</div></Link>
                </div>
                <Guide isShow={this.state.isShow} chShow = {this.setFatherShow}/>
            </div>
        )
    }
}
