import './textArea.css'

const TextArea = ({placeholder}) => {
    return(
        <textarea className='area' placeholder={placeholder}></textarea>
    )
}
export default TextArea