import React, {useState} from 'react'
import '../../App.css'



const VoteBtn = props =>{
    const [character] = useState(props.character)


    return (
        <form onSubmit={(e) => props.vote(e, character)}>
        <button type ='submit'>Vote</button>
        </form>
    )
}

export default VoteBtn;