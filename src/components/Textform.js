import React,{useState}  from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handlelowClick = ()=>{
      console.log("Uppercase was clicked");
      let newText= text.toLowerCase();
      setText(newText);
  }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');
  return (
    <>
   <div className='container'>
    <h1>{props.heading}-{text}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
    </div>
    
    <div className="container my-4">
      <h1>Your text Summery</h1>
<p>{text.split("").length}words and {text.length}charecters</p>
    <p>{0.008 * text.split("").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
