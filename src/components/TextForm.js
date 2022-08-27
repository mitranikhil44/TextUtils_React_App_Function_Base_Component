import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase", "success");
  }
  
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase ", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  }
  const handleCtClick = (event) => {
    setText("");
    props.showAlert("Clear your all text ", "success");
  }
  
  const handleCpClick = () => {
    let textData = document.getElementById("inputBox");
    textData.select();
    navigator.clipboard.writeText(textData.value);
    props.showAlert("Copy your text", "success");
  }
  
  const handleRvExSpClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces in your text", "success");
  }
  
  return (
    <>
    <div className={`container text-${props.mode === "light" ? "dark":"light"}`}>
        <h1 htmlFor="inputBox" className="form-label">{props.heading}</h1>
        <hr />
        <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark":"light"}`} id="inputBox" placeholder="Enter your text" rows="8" onChange={handleOnChange} value={text}></textarea>
        <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleCtClick}>Clear Text</button>
        <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleCpClick}>Copy Text</button>
        <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleRvExSpClick}>Remove Extra Spaces</button>
    </div>
    <div className={`container text-${props.mode === "light" ? "dark":"light"}`}>
      <h2>Your Text Info</h2>
      <p>{text === "" ? 0 : text.split(" ").length} words and {text.length} charecters</p>
      <h2>Preview</h2>
      <p>{text}</p>
      <p>{0.0008 * text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
}