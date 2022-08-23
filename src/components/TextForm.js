import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
  const handleClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  
  const handleChange=(event)=>{
    setText(event.target.value)
  }
  
  const handleClickLower= ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }
  
  const handleClearText=()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  
  const handleClickAlternateLower = ()=>{
    let newText = '';
    for(let i=0;i<text.length;i++){
      if(i%2===0){
        newText += text.charAt(i).toLowerCase();
      }
      else{
        newText += text.charAt(i).toUpperCase();
      }
    }
    setText(newText);
    props.showAlert("Alternate Casing Done", "success");
  }
  
  const handleClickAlternateUpper = ()=>{
    let newText = '';
    for(let i=0;i<text.length;i++){
      if(i%2===0){
        newText += text.charAt(i).toUpperCase();
      }
      else{
        newText += text.charAt(i).toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Alternate Casing Done", "success");
  }


  const [text, setText] = useState("");  

  const[copyText, setCopyText] = useState("Copy Text");
  const handleCopy=()=>{
    let element = document.getElementById("myForm");
    element.select();
    navigator.clipboard.writeText(element.value);
    setCopyText("Text Copied");
    alert(copyText);
  }

  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleChange} id="myForm" rows="8"></textarea>
        <button className="btn btn-secondary my-3" onClick = {handleClearText}>{props.button3}</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleClick}>{props.button1}</button>
        <button className="btn btn-secondary my-3 " onClick = {handleClickLower}>{props.button2}</button>
        <button className="btn btn-primary my-3 mx-2 " onClick = {handleClickAlternateLower}>{props.button4}</button>
        <button className="btn btn-secondary my-3" onClick = {handleClickAlternateUpper}>{props.button5}</button>
        <button className="btn btn-primary my-3 mx-2" onClick = {handleCopy}>{copyText}</button>

    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>   
      {/* text.split(" ").length this is giving the array length  */}
      <h2>Time Taken to Read</h2>
      <p>{0.008 * text.split(" ").length} minutes taken</p>

      <h2>Text Preview</h2>
      <p>{text.length>0?text:"Enter Something to Preview!"}</p>
    </div>
    </>
  )
}


TextForm.propTypes = {
    heading : PropTypes.string.isRequired,
    button1 : PropTypes.string.isRequired,
    button2 : PropTypes.string.isRequired,
    button3 : PropTypes.string.isRequired,
    button4 : PropTypes.string.isRequired,
    button5 : PropTypes.string.isRequired
}
