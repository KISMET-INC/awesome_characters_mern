import React, {useState, useEffect, useContext} from 'react'
import '../../App.css'
import Context from '../../context/Context';



const VoteBtn = ({label, character, vote, votedOn}) =>{
    const  context = useContext(Context)
    const [signature, setSignature] = useState(context.signature)

    useEffect(()=>{
        setSignature(context.signature)
    },[context.signature])


    return (
        

        <form onSubmit={(e) => vote(e,signature,character)}>
            {
                context.votedList.hasOwnProperty(character.charName) === true && label.toLowerCase() === 'vote' ? <button className ='voted'>{label}</button> : <button type ='submit'>{label}</button>
            }
        </form>
    )
    
}

export default VoteBtn;