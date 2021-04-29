import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./result.scss"
import ERR from "../../component/err/err"
import { setHall } from "../../api/index"
export default class Result extends Component {

    async componentDidMount() {
        console.log('jjjj');
        let title = sessionStorage.getItem("title")
        let memorial_hall_id = sessionStorage.getItem("memorialHallId")
        let openid = localStorage.getItem("openid")
        if (title !== "茶水间") {
            let res = await setHall(openid, memorial_hall_id)
        }
    }
    render() {
        let title = sessionStorage.getItem("title")
        let memorialHallContent = sessionStorage.getItem("memorialHallContent")

        return (
            <div className="result">
                <div className="res-title">{title} </div>
                <div className="res-content">
                    <div className="mask"></div>
                    <div className="res">
                        {title === "茶水间" ? <ERR></ERR> : memorialHallContent}
                    </div>
                    <Link to="/hall"> <div className="res-bt"></div></Link>
                </div>
                <Link to="/rule"><div className="res-rule"></div></Link>
                <Link to="/guide"><div className="res-guide"></div></Link>
            </div>
        )
    }
}
