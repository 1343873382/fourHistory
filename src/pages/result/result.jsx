import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./result.scss"
export default class Result extends Component {
    render() {
        let pro_str=sessionStorage.getItem("pro_str")
        return (
            <div className="result">
                <div className="res-title">{pro_str} </div>
                     <div className="res-content">
                              <div className="res">
                                  按时打卡是带式还打算空间很大卡沙库萨克的机阿里d山还a巨大凯撒角度的卡拉的卡拉大卡沙库萨克的机阿里d山还a巨大凯撒角度的卡拉的卡拉大卡沙库萨克的机阿里d山还a巨大凯撒角度的卡拉的卡拉大卡沙库萨克的机阿里d山还a巨大凯撒角度的卡拉的卡拉大卡沙库萨克的机阿里d山还a巨大凯撒角度的卡拉的卡拉大卡沙库萨克的机阿里d山还a巨大凯撒角度的卡拉的卡拉大卡沙库萨克的机阿里d山还a巨大凯撒角度的卡拉的卡拉圣诞节看了撒开绿灯较快拉升阶段卡死还打算空间很大卡沙库萨克的机阿里d山的卡拉的卡拉圣诞节看了撒开绿灯较快拉升阶段卡死了巨大凯撒角度了巨大凯撒角度看九十六 撒旦撒旦哈萨克打开
                              </div>
                           <Link to="/hall"> <div className="res-bt"></div></Link>  
                     </div>
                     <Link to="/rule"><div className="res-rule"></div></Link>
                     <Link to="/guide"><div className="res-guide"></div></Link>
            </div>
        )
    }
}
