import { useEffect } from "react"
let data=[{
    "heading":"how to learn javascript",
    "content":"lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
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