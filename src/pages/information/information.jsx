import React, { Component } from 'react'
import "./information.scss"
// import { setSchool } from "../../api/index"
import { setXueyuan } from "../../api/index"
import { setInformation,updateInformation } from "../../api/index"
export default class Information extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            // data: ['通信与信息工程学院','计算机科学与技术学院','自动化学院','先进制造工程学院','光电工程学院','软件工程学院','生物信息学院','理学院','经济管理学院','传媒艺术学院','外国语学院','国际学院','网络空间安全与信息法学院','马克思主义学院','体育学院','创新创业教育学院','国防信息工程技术研究院','电子信息与网络工程研究院'],
            timeID: -1,
            height:1334
        }
    }
    componentDidMount(){
        let originalHeight=document.documentElement.clientHeight || document.body.clientHeight;
        this.setState({
            height:originalHeight
        })
        document.querySelector('.information').style.height = originalHeight+'px';
        document.querySelector('.mask').style.height = originalHeight+'px';
        window.onresize = function(){
            document.querySelector('.information').style.height = originalHeight+'px';
            document.querySelector('.mask').style.height = originalHeight+'px';
        }
    }
    telclear = () => {
        let tel = document.querySelector(".tel-right").querySelector("input");

        if (tel.value === "请输入正确的电话号码！") {
            tel.style.color = "#7B4733"
            tel.value = ""
        }

    }
    schoolclear = () => {
        let school = document.querySelector(".school-right").querySelector("input");
        if (school.value === "请输入学院！") {
            school.style.color = "#7B4733"
            school.value = ""
        }
    }
    nameclear = () => {
        let name = document.querySelector(".name-right").querySelector("input");
        if (name.value === "请输入姓名！") {
            name.style.color = "#7B4733"
            name.value = ""
        }

    }
    turnHome = async () => {
        let name = document.querySelector(".name-right").querySelector("input")
        let school = document.querySelector(".school-right").querySelector("input")
        let tel = document.querySelector(".tel-right").querySelector("input");
        let openid = localStorage.getItem("openid")
        let INFO=localStorage.getItem("info")
        if(INFO==="success"){
            if (tel.value.length !== 11||!(/[0-9]/g).test(tel.value)) {
                tel.style.color = "#C4672E"
                tel.value = "请输入正确的电话号码！"
            }
            if (school.value.length === 0) {
                school.style.color = "#C4672E"
                school.value = "请输入学院！"
            }
            if (name.value.length === 0) {
                name.style.color = "#C4672E"
                name.value = "请输入姓名！"
            }
            if(
                tel.value.length === 11&&
                (/[0-9]/g).test(tel.value)&&
                school.value.length !== 0&&
                name.value.length !== 0&&
                name.value !== "请输入姓名！"&&
                school.value !== "请输入学院！"&&
                tel.value !== "请输入正确的电话号码！"&&
                school.value !== "请输入正确的学院名称！"
            ){
                 console.log(school.value);
                let res = await updateInformation(name.value, school.value, tel.value, openid)
                 console.log(res);
                let info = res.info
                localStorage.setItem("info", info)
                if (res.code === 10000) {
                    this.props.history.push("/")
                }else if(res.code===20000){
                    school.style.color = "#C4672E"
                    school.value = "请输入正确的学院名称！"
                }
            }
        }else{
            if (tel.value.length !== 11||!(/[0-9]/g).test(tel.value)) {
                tel.style.color = "#C4672E"
                tel.value = "请输入正确的电话号码！"
            }
            if (school.value.length === 0) {
                school.style.color = "#C4672E"
                school.value = "请输入学院！"
            }
            if (name.value.length === 0) {
                name.style.color = "#C4672E"
                name.value = "请输入姓名！"
            }
            if(
                tel.value.length === 11&&
                (/[0-9]/g).test(tel.value)&&
                school.value.length !== 0&&
                name.value.length !== 0&&
                name.value !== "请输入姓名！"&&
                school.value !== "请输入学院！"&&
                tel.value !== "请输入正确的电话号码！"&&
                school.value !== "请输入正确的学院名称！"
            ){
                let res = await setInformation(name.value, school.value, tel.value, openid)
                let info = res.info
                localStorage.setItem("info", info)
                if (res.code === 10000) {
                    this.props.history.push("/")
                }else if(res.code===20000){
                    school.style.color = "#C4672E"
                    school.value = "请输入正确的学院名称！"
                }
            }
        }
    }
    turnSelect = async () => {
        let select = document.querySelector(".school-select");
        let school = document.querySelector(".school-right").querySelector("input")
        if(school.value === "请输入正确的学院名称！"){
            school.style.color = "#7B4733"
            school.value = "";
        }
        clearTimeout(this.state.timeID)
        this.state.timeID = setTimeout(async () => {
            let { data } = await setXueyuan(school.value)
           console.log(data);
            this.setState({
                data:data.schools
            })
          if(this.state.data===null){
            select.style.display = "none"
          }else{
            select.style.display = "block"
          }
           
        }, 300)
          console.log(this.state)
        // console.log(school.value.length);
        // if(school.value.length>2){
        //     select.style.display = "none"
        // }else{
        //     select.style.display = "block"
        // }
         
        
        // clearTimeout(this.state.timeID)
        // this.state.timeID = setTimeout(async () => {
        //     let { data } = await setSchool(school.value)
        //    console.log(data);
        //     this.setState({
        //         data:data.colleges
        //     })
        //   if(this.state.data===null){
        //     select.style.display = "none"
        //   }else{
        //     select.style.display = "block"
        //   }
           
        // }, 300)


    }
    chooseSchool = (e) => {
        console.log(2);
        let select = document.querySelector(".school-select");
        let school = document.querySelector(".school-right").querySelector("input")
        console.log(e.target.innerText);
        school.value = e.target.innerText
        select.style.display = "none"
        this.setState({
            data: []
        })

    }
    render() {
        const listItems = (this.state.data||[]).map((data) =>
            <li key={data} onClick={this.chooseSchool}>{data}</li>
        );
        return (
            <div className="information" style={{height:this.state.height+'px'}}>
                <div className="mask"  style={{height:this.state.height+'px'}}><div className="logo"></div><div className="info"></div></div>
                <div className="self-page">
                    <div className="self-title">个人信息</div>
                    <div className="self-content">
                        <div className="content-name">
                            <div className="name-left">姓名：</div>
                            <div className="name-right">
                                <input type="text" placeholder="请输入你的姓名" onClick={this.nameclear} />
                            </div>
                        </div>
                        <div className="content-school">
                            <div className="school-left">学院：</div>
                            <div className="school-right">
                                <input type="text" placeholder="请选择你的学院"  onClick={this.schoolclear} onFocus={this.turnSelect} onBlur={()=>{
                                    setTimeout(()=>{
                                        let select = document.querySelector(".school-select");
                                        select.style.display = "none"
                                    },100)
                                }} />
                                <div className="school-select">
                                    <ul>
                                        {listItems}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-tel">
                            <div className="tel-left">电话：</div>
                            <div className="tel-right">
                                <input type="text" placeholder="请输入你的电话号码" list="browsers" required onClick={this.telclear} />
                            </div>
                        </div>
                    </div>
                    <div className="self-bt" onClick={this.turnHome}></div>
                </div>
            </div>
        )
    }
}
