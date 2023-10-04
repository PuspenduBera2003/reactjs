import React from 'react'

function About(props) {
    const accordion_bg = (color) => {
        if (color === 'dark') {
            return '#383838'
        }
        else if (color === 'light') {
            return 'white'
        }
    }
    return (
        <div className="accordion my-3" style={{ maxWidth: '90%', margin: 'auto' }} id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.theme === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: accordion_bg(props.theme) }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong>Analyze Your text</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show bg-${props.theme}`}>
                    <div className={`accordion-body text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or copy word, switches all the words to uppercase or lowercase, it gives you the option to clear the whole text also.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.theme === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: accordion_bg(props.theme) }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>Free to use </strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className={`accordion-collapse collapse show bg-${props.theme}`}>
                    <div className={`accordion-body text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.theme === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: accordion_bg(props.theme) }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Browser Compatible </strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className={`accordion-collapse collapse show bg-${props.theme}`}>
                    <div className={`accordion-body text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
