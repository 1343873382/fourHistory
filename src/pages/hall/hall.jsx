import React, { Component } from 'react'
import "./hall.scss"
import {Link} from "react-router-dom"
export default class Hall extends Component {
    render() {
        return (
            <div className="hall">
                <Link to="/rule">
                    <div className="hall-rule"></div>
                    </Link>
            <Link to="/guide">
            <div className="hall-guide"></div>
            </Link>
              <div className="hall-choose">
                  <Link to="/question"><div className="hall-radius">人物区</div></Link>
                  <Link to="/question"><div className="hall-radius">会议区</div></Link>
                  <Link to="/question"><div className="hall-radius">事件区</div></Link>
              </div>
            </div>
        )
    }
}
