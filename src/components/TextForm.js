import React,{useState} from 'react'


export default function TextForm(props) {

    function handleOnChange(event) {
        console.log("Changed text"+text);
        setText(event.target.value);
        
    }
    function handleOnClick() {
        console.log("Changed to upper case"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to upper case",'success');
    }
    function handleLowClick() {
        console.log("Changed to lower case"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to lower case",'success');
    }
    function handleClearText() {
        console.log("Text has been cleared"+text);       
        setText('');
        props.showAlert("Text has been cleared",'success')
    }

    const [text,setText]=useState("")
  return (
    <>
    <div>
      <div className={`mb-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Enter Text Here</h1>
        <textarea className='form-control' value={text}  placeholder="Enter text here..." onChange={handleOnChange} id='myBox' rows='8' />
        <button className={`btn btn-outline-secondary my-3 mx-2 text-${props.mode==='light'?'dark':'light'}`} onClick={handleOnClick}>Convert to Upper case</button>
        <button className={`btn btn-outline-secondary my-3 mx-2 text-${props.mode==='light'?'dark':'light'}`} onClick={handleLowClick}>Convert to Lower case</button>
        <button className={`btn btn-outline-secondary my-3 mx-2 text-${props.mode==='light'?'dark':'light'}`} onClick={handleClearText}>Clear text</button>
      </div>
    </div>
    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} mins read</p>
        <h2>Preview</h2>
        <p>{text===''?"Please enter text in above text box to preview it":text}</p>
    </div>
    </>
  )
}
