import React, { useContext, useEffect, useRef, useState} from 'react';
import Context from '../../context/Context'
import "../../App.css";
import '../../static/css/Signature.css'

const Signature = (props, ref) => {
const context = useContext(Context)
const [input, setInput] = useState('')
const nameRef = useRef(null);

    const update_signature= (e)=>{
        e.preventDefault();
        props.handleClose();
        input === ''? context.setSignature('Anonymous') : context.setSignature(input)

    }


    useEffect(()=> {
        nameRef.current.focus()
    },[])


    return (
        <form id = 'Signature' onSubmit ={update_signature} >
            <input 
            ref = {nameRef}
            type = "text"  
            onChange = {(e)=> {setInput(e.target.value)}} 
            name = "signature" 
            value = {input}
            placeholder ='Anonymous' 
            maxLength="10"
            />
            <div  className = 'signature_buttons'>
                <button  onClick= {update_signature}>Set Name</button>
                <button onClick= {props.handleClose}>Stay Anonymous</button>
            </div>
        </form>
    )
}
const forwardInput = React.forwardRef(Signature)

export default forwardInput;