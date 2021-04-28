import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./result.scss"
import ERR from "../../component/err/err"
export default class Result extends Component {
    render() {
        let title=sessionStorage.getItem("title")
        let memorialHallContent=sessionStorage.getItem("memorialHallContent")
      
        return (
            <div className="result">
                <div className="res-title">{title} </div>
                     <div className="res-content">
                              <div className="res">
                                
                                  {title==="茶水间"? <ERR></ERR>:memorialHallContent}
                              </div>
                           <Link to="/hall"> <div className="res-bt"></div></Link>  
                     </div>
                     <Link to="/rule"><div className="res-rule"></div></Link>
                     <Link to="/guide"><div className="res-guide"></div></Link>
            </div>
        )
    }
}
