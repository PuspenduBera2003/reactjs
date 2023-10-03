import React from 'react'

function Alert(props) {
    const alertType = (word) => {
        let capitalized_word = word.charAt(0).toUpperCase() + word.slice(1)
        return capitalized_word;
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} text-${props.alert.type} w-50 m-auto mt-2 text-center`} role="alert">
            <strong>{alertType(props.alert.type)} : </strong>{props.alert.message}
        </div>
    )
}

export default Alert
