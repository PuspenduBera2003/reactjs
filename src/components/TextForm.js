import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () =>{
        const uppercase_string = text.toUpperCase();
        setText(uppercase_string);
    }

    const handleLowClick = () =>{
        const lowercase_string = text.toLowerCase();
        setText(lowercase_string);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const toggleText = () => {
        let text_ip = document.getElementById('text_input');
        if(text_ip.style.display === "none" && text.length !== 0) {
            text_ip.style.display = 'block';
        }
        else {
            text_ip.style.display = 'none';
        }
    }

    const [text, setText] = useState('');

    return (
        <div className='container my-5'>
            <h1 className="card-title text-center">{props.heading}</h1>
            <div className="form-floating m-auto my-4">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name="input" value={text} onChange={handleOnChange} style={{height: "200px"}}></textarea>
                <label htmlFor="floatingTextarea2">Enter Your Text Here</label>
                <button className="btn btn-dark mt-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-dark mt-2 ms-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-dark mt-2 ms-3" onClick={toggleText}>Toggle View/Hide</button>
            </div>
            <div className="container mb-3" id='text_input' style={{display: 'none'}}>
                <h4>Your text is</h4>
                <p className="card-text" style={{textAlign: "justify"}}>
                    {text}
                </p>
            </div>
            <div className="container">
                <h4>Summary of your text is</h4>
                <p className="card-text" style={{textAlign: "justify"}}>
                    {text.split(" ").length} words and {text.length} characters
                </p>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string,
}