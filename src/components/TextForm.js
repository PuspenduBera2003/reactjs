import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        const uppercase_string = text.toUpperCase();
        setText(uppercase_string);
        props.showAlert("success", "Text Converted to Uppercase")
    }

    const handleLowClick = () => {
        const lowercase_string = text.toLowerCase();
        setText(lowercase_string);
        props.showAlert("success", "Text Converted to Lowercase")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("floatingTextarea2");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success", "Text Copied to Clipboard")
    }

    const handleExtraSpace = () => {
        let words = text.split(' ').filter(word => word !== '');
        setText(words.join(' '));
        props.showAlert("success", "Extra Space Removed")
      }

    const toggleText = () => {
        let text_ip = document.getElementById('text_input');
        if (text_ip.style.display === "none" && text.length !== 0) {
            text_ip.style.display = 'block';
        }
        else {
            text_ip.style.display = 'none';
        }
    }

    const clearText = () => {
        setText('');
        props.showAlert("success", "Text Cleared")
    }

    const backspace = ()=> {
        setText(text.slice(0,-1));
    }

    const textWords = () => {
        if (text.length === 0) {
            return 0;
        }
        else {
            return text.split(/\s+/).filter(word => word !== "").length;
        }
    }

    const [text, setText] = useState('');

    let wordCount = textWords();

    const timeCalculation = ()=> {
        if(wordCount*0.17 > 3600) {
            let wordCountminute = wordCount*0.17/3600;
            return (wordCountminute+" hours");
        }
        else if(wordCount*0.17 > 60) {
            let wordCountminute = wordCount*0.17/60;
            return (wordCountminute+" minutes");
        }
        else {
            let wordCountsecond = wordCount*0.17;
            return (wordCountsecond+" seconds");
        }
    }

    let requiredTime = timeCalculation();

    return (
        <div className='container my-5'>
            <h1 className="card-title text-center">{props.heading}</h1>
            <div className={`form-floating m-auto my-4 text-dark`}>
                <textarea className={`form-control bg-${props.theme}-subtle`} placeholder="Leave a comment here" id="floatingTextarea2" name="input" value={text} onChange={handleOnChange} style={{ height: "200px" }}></textarea>
                <label htmlFor="floatingTextarea2">Enter Your Text Here</label>
                <button className={`btn btn-outline-${props.theme==='light'?'dark':'light'} mt-2`} onClick={backspace}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                    </svg>
                </button>
                <button className={`btn btn-outline-${props.theme==='light'?'dark':'light'} mt-2 ms-3`} onClick={clearText}>Clear Text</button>
                <button className={`btn btn-outline-${props.theme==='light'?'dark':'light'} mt-2 ms-3`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-outline-${props.theme==='light'?'dark':'light'} mt-2 ms-3`} onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className={`btn btn-outline-${props.theme==='light'?'dark':'light'} mt-2 ms-3`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-outline-${props.theme==='light'?'dark':'light'} mt-2 ms-3`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button className={`btn btn-outline-${props.theme==='light'?'dark':'light'} mt-2 ms-3`} onClick={toggleText}>Toggle Preview</button>
            </div>
            <div className="container">
                <h4>Your text summary</h4>
                <p className="card-text" style={{ textAlign: "justify"}}>
                    {wordCount} words and {text.length} characters <br />
                    You required {requiredTime} time to read this text.
                </p>
            </div>
            <div className="container mt-3" id='text_input' style={{ display: 'none' }}>
                <h4>Preview</h4>
                <p className="card-text" style={{ textAlign: "justify" }}>
                    {text}
                </p>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string,
}