import React from 'react'

function About(props) {
    const accordion_bg = (color) => {
        if(color==='dark') {
            return '#383838'
        }
        else if(color==='light') {
            return 'white'
        }
    }
    return (
        <div className="accordion my-3" style={{maxWidth:'90%', margin:'auto'}} id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.theme==='light'?'dark':'light'}`} style={{backgroundColor:accordion_bg(props.theme)}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show bg-${props.theme}`}>
                    <div className={`accordion-body text-${props.theme==='light'?'dark':'light'}`}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.theme==='light'?'dark':'light'}`} style={{backgroundColor:accordion_bg(props.theme)}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className={`accordion-collapse collapse show bg-${props.theme}`}>
                    <div className={`accordion-body text-${props.theme==='light'?'dark':'light'}`}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className={`accordion-button text-${props.theme==='light'?'dark':'light'}`} style={{backgroundColor:accordion_bg(props.theme)}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className={`accordion-collapse collapse show bg-${props.theme}`}>
                    <div className={`accordion-body text-${props.theme==='light'?'dark':'light'}`}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
