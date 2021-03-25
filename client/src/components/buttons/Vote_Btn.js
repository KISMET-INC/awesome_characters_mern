import React from 'react'
import '../../App.css'
import { navigate } from '@reach/router'


const Vote_Btn = props =>{

    const goto_vote =() =>{
        navigate('/vote')
    }
    
    return (
        <button onClick = { goto_vote }>Vote</button>
    )
}

export default Vote_Btn;