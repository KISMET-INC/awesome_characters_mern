import React, { useContext, useState} from 'react';
import Context from '../../context/Context'
import "../../App.css";

const Signature = (props, ref) => {
const context = useContext(Context)
const [signature, setSignature] = useState(context.signature)

    const update_signature= (e)=>{
        e.preventDefault();
        props.handleClose();
        context.setSignature(signature)

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



    return (
        <form id = 'Signature' onSubmit ={update_signature} >
            <input 
            style = {signatureStyle} 
            type = "text"  
            onChange = {(e)=> {setSignature(e.target.value)}} 
            name = "signature" 
            value = {signature} />
            <div style= {signatureButtons} className = 'signature_buttons'>
                <button style ={buttons} onClick= {update_signature}>Set Name</button>
                <button onClick= {props.handleClose}>Stay Anonymous</button>
            </div>
        </form>
    )
}


export default Signature;