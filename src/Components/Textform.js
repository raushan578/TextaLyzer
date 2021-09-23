import React, {useState} from 'react'

export default function Textform(props) {




const handleUpClick = ()=>{
        
console.log("Uppercase was clicked");

let newText = text.toUpperCase();


setText(newText);
document.title = 'TextaLyzer - Uppercase';
}
const handleLoClick = ()=>{
        
    console.log("Lowercase was clicked");
    
    let newText = text.toLowerCase();
   
    setText(newText);
    document.title = 'TextaLyzer - Lowercase';
    }
const handleOnChange =(event)=>{

console.log("On Change");
setText(event.target.value)



}

const myFunction = ()=>{
    let copy = document.getElementById("exampleInputEmail1");
 copy.select();
  copy.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copy.value);
 
  /* Alert the copied text 
  alert("Copied Successfully!");
  console.log("Text Copied")    */

}
const clearText =()=>{

let clear = '';
setText(clear);


}




   const [text, setText] = useState('');
   
   
   
   return (
<>
        

  <div className="container mb-3">
    <h3 from="exampleInputEmail1" className="form-label">{props.heading}</h3>
    <textarea  value={text} onChange={handleOnChange}  className="form-control" id="exampleInputEmail1" rows="6"   />





  <button className="btn btn-success mx-3 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick} >Convert to LowerCase</button>
  <button  className="btn btn-warning mx-3 my-3" onClick={myFunction}>Copy Text</button>
  <button  className="btn btn-info mx-3 my-3" onClick={clearText}>Clear Text</button>
  </div>

<div className="container">
<h2>Text Summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Alphabets.</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Reading </p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview"}</p>
</div>

</>
   )}