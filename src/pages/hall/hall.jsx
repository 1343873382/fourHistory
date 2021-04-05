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
               
            </div>
        )
    }
}
