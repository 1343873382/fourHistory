import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./result.scss"
export default class Result extends Component {
    render() {
        let pro_str=sessionStorage.getItem("pro_str")
        let memorialHallContent=sessionStorage.getItem("memorialHallContent")
        return (
            <div className="result">
                <div className="res-title">{pro_str} </div>
                     <div className="res-content">
                              <div className="res">
                                  {memorialHallContent}
                              </div>
                           <Link to="/hall"> <div className="res-bt"></div></Link>  
                     </div>
                     <Link to="/rule"><div className="res-rule"></div></Link>
                     <Link to="/guide"><div className="res-guide"></div></Link>
            </div>
        )
    }
}
