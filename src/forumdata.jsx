import { useEffect } from "react"
let data=[{
    "heading":"how to learn javascript",
    "content":"i want to learn bla blah blah"
}
,
{
    "heading":"doing drugs",
    "content":"very good drugs"
},

{
    "heading":"how to learn javascript",
    "content":"i want to learn bla blah blah"
},

{
    "heading":"how to learn javascript",
    "content":"i want to learn bla blah blah"
},

{
    "heading":"how to learn javascript",
    "content":"i want to learn bla blah blah"
}]
data.push({"heading":"how to append",
"content":"XDDDDDDDDD"})

let dataFromLocalStorage=JSON.parse(localStorage.getItem('data'))
if (dataFromLocalStorage){
    data=dataFromLocalStorage}
localStorage.setItem("data", JSON.stringify(data))

export default dataFromLocalStorage