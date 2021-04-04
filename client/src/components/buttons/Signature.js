import React, { useContext, useState} from 'react';
import Context from '../../context/Context'
import "../../App.css";

const Signature = props => {
const context = useContext(Context)
const [signature, setSignature] = useState(context.signature)

    const update_signature= (e)=>{
        e.preventDefault();
        props.handleClose();
        context.setSignature(signature)

    }



    return (
        <form onSubmit ={update_signature} >
        <input style = {{color: 'black'}} type = "text"  onChange = {(e)=> {setSignature(e.target.value)}} name = "signature" value = {signature} ></input>
        <button onClick= {update_signature}>Set Name</button>
        <button onClick= {props.handleClose}>Stay Anonymous</button>
        </form>
    )
}

export default Signature;