import React from "react"
import "./button.css"

const Button = ( {texto, onClick} ) => {
    return(
        <button className="button_body" onClick={onClick}> {texto} </button>
    )
}

export default Button