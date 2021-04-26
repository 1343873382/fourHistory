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
                <Link to="/information"><div className="self_information"></div></Link>
              <Link to="/hall"><div className="home-bt"></div></Link>
            </div>
        )
    }
}
