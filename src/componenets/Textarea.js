import React, { useState } from 'react';

export default function Textarea() {
    const downloadFile = () => {
        let content = text
        const element = document.createElement("a");
        const blob = new Blob([content], { type: "plain/text" });
        const fileUrl = URL.createObjectURL(blob);
        let filename = "mytext"
        element.setAttribute("href", fileUrl); //file location
        element.setAttribute("download", filename); // file name
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      };
    const [text, setText] = useState("");
    const toUp = ()=>{
        let upTEXT = text.toUpperCase();
        setText(upTEXT);
    }
    const toLow = ()=>{
        let upTEXT = text.toLowerCase();
        setText(upTEXT);
    }
    const copy = ()=>{
        navigator.clipboard.writeText(text)
    }
    const clear = ()=>{
        let myclear = "";
        setText(myclear);
    }
    const changeUp = (e)=>{
        setText(e.target.value)
    }
    return (
    <>
    <div>
        <h1 className='my3'>
            Enter text
        </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={changeUp} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUp}>To uppercase</button>
        <button className="btn btn-primary mx-1" onClick={toLow}>To lowercase</button>
        <button className="btn btn-primary mx-1" onClick={copy}>Copy to clipboard</button>
        <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={downloadFile}>Download</button>
    </div>
    <div className="container my-3">
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
    </div>
    </>)
}
