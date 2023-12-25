import { useState } from "react"
import React from 'react'

export const TextArea = (props) => {


// uppercase 
const convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
}

// lowercase 
const convertToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
}

// clear string 
const clearTextfunc = () => {
    let newText = "";
    setText(newText);
}


// bold and unbold 
const [myStyle,setMyStyle] = useState({
    fontWeight: 'normal',
})
const [btnText, setbtnText] = useState("Bold Text")

const boldFunc = () => {
    if(myStyle.fontWeight === "bold"){
        setMyStyle({
            fontWeight: 'normal',
        })
        setbtnText("bold text")
}
else{
    setMyStyle({
        fontWeight: 'bold',
    })
    setbtnText("unBold Text")
}
}


// copy text 
const copyFunc = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text Copied");
}


const handleOnCLick = (e) =>{
    setText(e.target.value);
}
    const [text, setText] = useState("Write your text here");
  return (
<>
    <div className="container" style= {{color: props.mode === 'dark'? 'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea className="form-control" value={text} id="myBox" onChange={handleOnCLick} style={myStyle} style1= {{backgroundColor: props.mode === 'dark'? '#0f1650':'white' , color: props.mode === 'dark'? 'white':'black'}} rows="3"></textarea>
  </div>
  <button className="btn btn-primary my-3 mx-1" onClick={convertToUppercase}>Convert to Upper Case</button>
  <button className="btn btn-primary my-3 mx-1" onClick={convertToLowercase}>Convert to Lower Case</button>
  <button className="btn btn-primary my-3 mx-1" onClick={clearTextfunc}>Clear Text</button>
  <button className="btn btn-primary my-3 mx-1" onClick={copyFunc}>Copy Text</button>
  <button className="btn btn-primary my-3 mx-1 style={myStyle}" onClick={boldFunc}>{btnText}</button>
</div>

<div className="container" style= {{color: props.mode === 'dark'? 'white':'black'}}>
    <h2>Text Summary</h2>
    <p>Above Text have {text.split(" ").filter(e => String(e).trim()).length} words and {text.length} characters</p>
    <p>Time required to read above Content is: {0.008 * text.split(" ").length} minutes</p>
</div>
</>
  )
}
