import React from 'react'

const CountButton = ({ label, wrapper, amount }) => {

    return (
        <div class="buttonDiv">
            <button onClick={() => { wrapper(amount) }}>{label}</button>
        </div>
    )
}

export default CountButton