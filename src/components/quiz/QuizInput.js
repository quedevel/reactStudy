import React, {useState} from 'react'

const QuizInput = ({fn}) => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        fn(text)
        setText('')
    }

    return (
        <div>
            <input type='text' value = {text} onChange = {handleChange}></input>
            <button onClick={handleClick}>확인</button>
        </div>
    )
}
export default QuizInput