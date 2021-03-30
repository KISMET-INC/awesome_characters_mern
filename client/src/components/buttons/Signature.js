import React, { useContext } from 'react';
import Context from '../../context/Context'
import "../../App.css";

const Signature = props => {
const context = useContext(Context)

    return (
        <input type = "text"  onChange = {(e)=> {context.setVal(e.target.value)}} name = "signature" value = {context.val} ></input>
    )
}

export default Signature;