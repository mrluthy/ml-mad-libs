import React from 'react';
// not essential named arguments
const Input = ({title, state, name}, onChange, index) => {
    return (
        <div key={index} className= "input">
            <label>{index}</label>
           <input name={name} value = {state} onChange={onChange}/>
           <label>{title}</label>
           
        </div>
    )
}

export default Input;