import ajax from "./ajax"
const Base = "https://be-prod.redrock.team/four-history";
// const Base = ""

export let setSchool = (college) => ajax(Base + "/college", { college }, "GET")
export let setInformation = (name, school, telephone, openid) => ajax(Base + "/information/create", { name, school, telephone, openid }, "POST")
export let updateInformation = (name, college, telephone, openid) => ajax(Base + "/information/update", { name, college, telephone, openid }, "POST")
export let answerQuestion = (problem_id) => ajax(Base + "problem/query", { problem_id }, "GET")
export let showArea = (openid, area) => ajax(Base + "/guide", { openid, area }, "GET")
export let setHall = (openid, memorial_hall_id) => ajax(Base + "/processUpdate", { openid, memorial_hall_id }, "POST")
export let setXueyuan = (school) => ajax(Base + "/school", { school }, "GET")