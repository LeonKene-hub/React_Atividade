import './checkBox.css'

const CheckBox = ({ name, checked }) => {

    const estilo = {
        backgroundColor: checked ? "#6C45CE" : "#FCFCFC",
        color: checked ? "#FCFCFC" : "#25282C",
    }

    return (
        <div checked={checked} className='check_body'>
            <input type="checkbox" name={name} checked={checked} />
            <label htmlFor={name} checked={checked}>{name}</label>

            <div>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}
export default CheckBox