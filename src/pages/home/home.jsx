import React, { Component } from 'react'
import {Link,Redirect} from "react-router-dom"
import "./home.scss"
export default class Home extends Component {
    render() {
        let info=localStorage.getItem("info")
        if(!info){
            return <Redirect to="/information"></Redirect>
        }
        return (
            <div className="home">
                <div className="logo"></div>
                <Link to="/information"><div className="self_information"></div></Link>
                <Link to="/hall"><div className="home-bt"></div></Link>
            </div>
        )
    }
}
