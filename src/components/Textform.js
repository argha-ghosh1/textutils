import React,{useState} from 'react'

    


export default function Textform(props) {
    const handleUpClick=()=>
    {
        //console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upper case","success")
    }
    
    const handleLowClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase","success")
    }
    const clearText=()=>
    {
        let newText='';
        setText(newText);
        props.showAlert("Clear all the text","success")
    }
    const copytoClipBoard=()=>
    {
        
        var text=document.getElementById("byBox");
        text.Select();
        navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied all the text","success");

    }
    const handleOnChange=(event)=>
    {
        //console.log("on change");
        setText(event.target.value);
    }
    const extraSpace=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove the extra spaces","success");
    }

    const [text, setText] = useState("");
    //setText=("new text");
  return (
    <>
        <div className='container'style={{color: props.mode==='dark'?'white':'#091657'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            {/*<label htmlFor="myBox" className="form-label">Example textarea</label>*/}
            <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#091657'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-success mx-2" onClick={clearText}>Clear all the text</button>
            <button className="btn btn-success mx-2" onClick={copytoClipBoard}>copy text</button>*
            <button className="btn btn-success mx-2" onClick={extraSpace}>Remove extra spaces</button>
        </div>
        <div className="container-my3" style={{color: props.mode==='dark'?'white':'#091657'}}>
            <h2>Your text summary</h2>
            <p>{text.split (" ").length} words,{text.length}characters</p>
            <p>{0.008*text.split (" ").length} Minutes to read</p>
            <h2>Prevew</h2>
            <p>{text.length>0 ?text:"Enter something in the something above to preview it here"}</p>
        </div>
    </>
    )
}
