import React from "react"
import { IoIosSearch } from "react-icons/io";
import './input.css'

const Input = ({ placeHolder, value, onChange }) => {
    return (
        <div className="input_box">
            <IoIosSearch color="#FCFCFC"/>
            <input placeholder={placeHolder} value={value} onChange={onChange} className="input_insert"/>
        </div>
    )
}
export default Input