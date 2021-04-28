import React, { Component } from 'react'
import "./err.scss"
export default class err extends Component {
    render() {
        return (
            <div className="error">
                <div className="big">路线错误，探索失败</div>
                <div className="small">提示：</div>
                <div className="small">当不清楚路线时</div>
                <div className="small">可以点击右下角指南查看路线提示</div>
            </div>
        )
    }
}
