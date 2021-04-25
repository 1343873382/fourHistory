import React, { Component } from 'react'
import "./information.scss"
import {setSchool} from"../../api/index"
export default class Information extends Component {
   constructor(props){
       super(props)
       this.state={
           data:[],
           timeID:-1
       }
   }
    telclear=()=>{        
        let tel=document.querySelector(".tel-right").querySelector("input");
      
        if(tel.value==="请输入正确的电话号码！"){
            tel.style.color="#7B4733"
            tel.value=""}
      
    }
    schoolclear=()=>{
       
        let school=document.querySelector(".school-right").querySelector("input");
        if(school.value==="请输入学校！"){
            school.style.color="#7B4733"
            school.value=""
        }
       
        

    }
    nameclear=()=>{
        let name=document.querySelector(".name-right").querySelector("input");
        if(  name.value==="请输入姓名！"){
            name.style.color="#7B4733"
            name.value=""
        }
        
    }
    turnHome=()=>{
        let name=document.querySelector(".name-right").querySelector("input")
        let school=document.querySelector(".school-right").querySelector("input")
        let tel=document.querySelector(".tel-right").querySelector("input");
        
        if (tel.value.length!==11){
            tel.style.color="#C4672E"
            tel.value="请输入正确的电话号码！"
        }
        if(school.value.length===0){
            school.style.color="#C4672E"
            school.value="请输入学校！"
        }
        if(name.value.length===0){
            name.style.color="#C4672E"
            name.value="请输入姓名！"
        }
        if(tel.value.length===11&&name.value.length!==0&&school.value.length===0){
            this.props.history.push("/")
        }
        console.log(localStorage.getItem("openid_token2"))
    }
     turnSelect=async()=>{
        let select=document.querySelector(".school-select");
        let school=document.querySelector(".school-right").querySelector("input")
        clearTimeout(this.state.timeID)
        this.state.timeID=setTimeout(async()=>{
            let {data}=await setSchool(school.value)
        
            this.setState({
                data
            })
            console.log(this.state);
            select.style.display="block"
        },300)
        
         
    }
    chooseSchool=(e)=>{
        let select=document.querySelector(".school-select");
        let school=document.querySelector(".school-right").querySelector("input")
        console.log(e.target.innerText);
        school.value=e.target.innerText
        select.style.display="none"
        this.setState({
            data:[]
        })
        
    }
    render() {
        const listItems = this.state.data.map((data) =>
        <li key={data.ID} onClick={this.chooseSchool}>{data.college_name}</li>
);
 
        return (
            <div className="information">
                <div className="self-page">
                    <div className="self-title">个人信息</div>
                    <div className="self-content">
                        <div className="content-name">
                            <div className="name-left">姓名：</div>
                            <div className="name-right">
                                <input type="text" placeholder="请输入你的姓名"onClick={this.nameclear}/>
                            </div>
                        </div>
                        <div className="content-school">
                            <div className="school-left">学校：</div>
                            <div className="school-right">
                            <input type="text" placeholder="请选择你的学校"onChange={this.turnSelect}onClick={this.schoolclear} />
                            <div className="school-select">
                                <ul>
                                { listItems}
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="content-tel">
                        <div className="tel-left">电话：</div>
                            <div className="tel-right">
                            <input type="text" placeholder="请输入你的电话号码"list="browsers" required autocomplete="off" onClick={this.telclear}/>
                            
            


                            </div>
                        </div>
                    </div>
                <div className="self-bt" onClick={this.turnHome}></div>
                </div>
                        
                 
              
            </div>
        )
    }
}
