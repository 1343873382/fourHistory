import React, { Component } from 'react'
import "./app.scss"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import Home from "./pages/home/home"
import Guide from "./pages/guide/guide"
import Hall  from "./pages/hall/hall"
import Information  from "./pages/information/information"
import Question  from "./pages/question/question"
import Result  from "./pages/result/result"
import Rule from "./pages/rule/rule"
import Show from './pages/show/show'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* 只匹配其中一个 */}
      <Switch>  
      {/* <Redirect from='/' exact to='/home'/> */}
      <Route exact path="/" component={Home}></Route>
      <Route path="/guide" component={Guide}></Route>
      <Route path="/hall" component={Hall}></Route>
      <Route path="/information" component={Information}></Route>
      <Route path="/question" component={Question}></Route>
      <Route path="/result" component={Result}></Route>
      <Route path="/rule" component={Rule}></Route>
      <Route path="/show" component={Show}></Route>
      
      </Switch>
    
      </BrowserRouter>
    )
  }
}