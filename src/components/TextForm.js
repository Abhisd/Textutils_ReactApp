import React,{useState} from "react";

export default function TextForm(props) {
    let [text,setText]=useState("");
    let handleOnChange=(e)=>{
        setText(e.target.value);
    }
    let handleClickToUpper=()=>{
        if(text.length>1){
            setText(text.toUpperCase());
            props.showAlert("Converted to Upper Case","success");
        }
        else{
            props.showAlert("No text available","warning");
        }   
    }
    let handleClickToLower=()=>{
        if(text.length>1){
            setText(text.toLowerCase());
            props.showAlert("Converted to Lower Case","success");
        }
        else{
            props.showAlert("No text available","warning");
        }
        
    }

    let handleClickToCopy=()=>{

        var text=document.getElementById('myBox');
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied!","success");   
    }
    let handleClickToRemove=()=>{
        setText("");
        props.showAlert("Text Removed!","success");
    }
    let handleClickToRemoveExtraSpaces=()=>{
        if(text.length>1){
            var newText=text.split(/[ ]+/);
            setText(newText.join(' '));
            props.showAlert("Removed all extra spaces","success");
        }
        else{
            props.showAlert("No text available remove","danger");
        }
       
    }
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3 >{props.heading}</h3>
    <div className=" mt-3 mb-3">
        <textarea className="form-control" id="myBox" rows="8"  onChange={handleOnChange}
         style={{backgroundColor:props.mode==='dark'?'#262626':'white',color:props.mode==='dark'?'white':'black'}} value={text}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleClickToUpper} >To Upper Case</button>
    <button className="btn btn-primary mx-1" onClick={handleClickToLower}>To Lower Case</button>
    <button className="btn btn-primary mx-1" onClick={handleClickToCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleClickToRemoveExtraSpaces}>Remove Extra Space</button>
    <button className="btn btn-primary mx-1" onClick={handleClickToRemove}>Remove</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h4>Text Summary</h4>
        <p>Total words are:{text.split(" ").length} and Total characters are {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>1?text:'Type something in the textbox to preview'}</p>
    </div>
    </>
  );
}
