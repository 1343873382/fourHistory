import React, { Component } from 'react'
import "./information.scss"
export default class Information extends Component {
    turnHome=()=>{
        this.props.history.push("/")
    }
    render() {
        return (
            <div className="information">
                <div className="self-page">
                    <div className="self-title">个人信息</div>
                    <div className="self-content">
                        <div className="content-name">
                            <div className="name-left">姓名：</div>
                            <div className="name-right">
                                <input type="text" placeholder="请输入你的姓名"/>
                            </div>
                        </div>
                        <div className="content-school">
                            <div className="school-left">学校：</div>
                            <div className="school-right">
                            <input type="text" placeholder="请选择你的学校"/>
                            </div>
                        </div>
                        <div className="content-tel">
                        <div className="tel-left">电话：</div>
                            <div className="tel-right">
                            <input type="text" placeholder="请输入你的电话号码"list="browsers" required autocomplete="off"/>
                            
            


                            </div>
                        </div>
                    </div>
                <div className="self-bt" onClick={this.turnHome}></div>
                </div>
                        
                 
              
            </div>
        )
    }
}
