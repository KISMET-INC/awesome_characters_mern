import React, {useState, useEffect, useContext} from 'react'
import '../../App.css'
import Context from '../../context/Context';



const VoteBtn = props =>{
    const [character] = useState(props.character)
    const  context = useContext(Context)
    const [signature, setSignature] = useState(context.signature)

    useEffect(()=>{
        console.log('get')
        setSignature(context.signature)
        console.log(context.signature)
    },[context.signature])


    return (
        <form onSubmit={(e) => props.vote(e,signature)}>
        <button type ='submit'>Vote</button>
        </form>
    )
}

export default VoteBtn;