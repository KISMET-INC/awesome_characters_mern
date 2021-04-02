import React, {useState, useEffect, useContext} from 'react'
import '../../App.css'
import Context from '../../context/Context';



const VoteBtn = props =>{
    const  context = useContext(Context)
    const [signature, setSignature] = useState(context.signature)

    useEffect(()=>{
        setSignature(context.signature)
    },[context.signature])


    return (
        <form onSubmit={(e) => props.vote(e,signature,props.character)}>
            <button type ='submit'>Vote</button>
        </form>
    )
}

export default VoteBtn;