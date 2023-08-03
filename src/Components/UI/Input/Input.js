import React from "react";

const Input = (props) => {
    return (
        <div>
            <label >
                {props.label} :
                &nbsp;<input type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} required />
            </label>
        </div >

    )
}
export default Input;