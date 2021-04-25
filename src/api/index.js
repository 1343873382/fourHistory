import ajax from "./ajax"
const Base = "https://be-prod.redrock.team/four-history";
// const Base = ""
export let setSchool = (college) => ajax(Base + "/college", { college }, "GET")
export let setInformation = (names, collage, telephone, oppenid) => ajax(Base + "/information/create", { names, collage, telephone, oppenid }, "POST")
export let answerQuestion = (problem_id) => ajax(Base + "problem/query", { problem_id }, "GET")