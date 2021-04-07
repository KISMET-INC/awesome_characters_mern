import React, { useContext, useEffect, useRef, useState} from 'react';
import Context from '../../context/Context'
import "../../App.css";

const Signature = (props, ref) => {
const context = useContext(Context)
const [signature, setSignature] = useState(context.signature)
const [input, setInput] = useState('')
const nameRef = useRef(null);

    const update_signature= (e)=>{
        e.preventDefault();
        props.handleClose();
        input == ''? context.setSignature('Anonymous') : context.setSignature(input)

    }

    const signatureStyle = {
        color: 'black',
        flexDirection: 'column',
        marginTop: '10px',
        width: '100%',
        paddingLeft: '10px'

    }
    const signatureButtons = {
        marginTop: '20px',
    }
    const buttons = {
        marginRight: '20px',
    }


    useEffect(()=> {
        nameRef.current.focus()
    },[])


    return (
        <form id = 'Signature' onSubmit ={update_signature} >
            <input 
            ref = {nameRef}
            style = {signatureStyle} 
            type = "text"  
            onChange = {(e)=> {setInput(e.target.value)}} 
            name = "signature" 
            value = {input}
            placeholder ='Anonymous' 
            maxlength="10"
            />
            <div style= {signatureButtons} className = 'signature_buttons'>
                <button style ={buttons} onClick= {update_signature}>Set Name</button>
                <button onClick= {props.handleClose}>Stay Anonymous</button>
            </div>
        </form>
    )
}
const forwardInput = React.forwardRef(Signature)

export default forwardInput;