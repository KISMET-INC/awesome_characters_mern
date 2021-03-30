import React from 'react'
import '../../App.css'



const VoteBtn = props =>{


    return (
        <form onSubmit={(e) => {props.vote(e)}}>
        <button type ='submit'>Vote</button>
        </form>
    )
}

export default VoteBtn;