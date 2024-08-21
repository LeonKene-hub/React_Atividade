import './checkBox.css'
import { IoClose } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { useState } from 'react';

const CheckBox = ({ name, onClickClose, onClickEdit }) => {

    const [ativo, setAtivo] = useState(false)
    
    const estilo = {
        backgroundColor: ativo ? "#6C45CE" : "#FCFCFC",
        color: ativo ? "#FCFCFC" : "#25282C",
        borderColor: ativo ? "#FCFCFC" : "#25282C"
    }

    return (
        <div checked={ativo} onChange={() => ativo ? setAtivo(false) : setAtivo(true)} className='check_body' style={estilo}>
            <div className='alinhado'>
                <input type="checkbox" name={name} checked={ativo} className='check_input' />
                <label htmlFor={name} checked={ativo} style={{color: ativo ? "#FCFCFC" : "#25282C"}}>{name}</label>
            </div>

            <div className='alinhado espaco'>
                <button className='botao' style={estilo}>
                    <IoClose color={ativo ? "#FCFCFC" : "#25282C"} size={50} onClick={onClickClose}/>
                </button>
                <button className='botao' style={estilo}>
                    <BiSolidPencil color={ativo ? "#FCFCFC" : "#25282C"} size={50} onClick={onClickEdit}/>
                </button>
            </div>
        </div>
    )
}
export default CheckBox