import React, { useContext, useState} from 'react';
import Context from '../../context/Context'
import "../../App.css";

const Signature = props => {
const context = useContext(Context)
const [string, setString] = useState('')

    const update_signature= (e)=>{
        e.preventDefault();
        context.setVal(string)
    }

    return (
        <form onSubmit ={update_signature} >
        <input type = "text"  onChange = {(e)=> {setString(e.target.value)}} name = "signature" value = {string} ></input>
        <button type= 'submit'>Set</button>
        <button type= 'submit'>Stay Anonoymous</button>
        </form>
    )
}

export default Signature;