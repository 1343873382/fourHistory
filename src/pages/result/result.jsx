import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./result.scss"
import ERR from "../../component/err/err"
import { setHall } from "../../api/index"
import Guide from '../../component/guide/guide.jsx';
export default class Result extends Component {
    state={
        isShow:false
    }
    async componentDidMount() {
        let title = sessionStorage.getItem("title")
        let memorial_hall_id = sessionStorage.getItem("memorialHallId")
        let openid = localStorage.getItem("openid")
        if (title !== "茶水间") {
            setHall(openid, memorial_hall_id)
        }
    }
    setFatherShow = (bool)=>{
        this.setState({
            isShow:bool
        })
    }
    render() {
        let title = sessionStorage.getItem("title")
        let memorialHallContent = sessionStorage.getItem("memorialHallContent")

        return (
            <div className="result">
{title.length>7?<div className="res-bigtitle">{title} </div>:<div className="res-title">{title} </div>}
                
                <div className="res-content">
                    <div className="mask"></div>
                    <div className="res">
                        {title === "茶水间" ? <ERR></ERR> : memorialHallContent}
                    </div>
                    <Link to="/hall"> <div className="res-bt"></div></Link>
                </div>
                <Link to="/rule"><div className="res-rule"></div></Link>
                <div className="res-guide" onClick={()=>{this.setState({isShow:true})}}></div>
                <Guide isShow={this.state.isShow} chShow = {this.setFatherShow}/>
            </div>
        )
    }
}
