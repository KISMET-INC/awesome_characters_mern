import React, {useState, useEffect, useContext} from 'react'
import '../../App.css'
import Context from '../../context/Context';



const VoteBtn = props =>{
    const [character] = useState(props.character)
    const  context = useContext(Context)
    const [string, setString] = useState(context.val)

    useEffect(()=>{
        console.log('get')
        setString(context.val)
        console.log(context.val)
    },[context.val])


    return (
        <form onSubmit={(e) => props.vote(e,string)}>
        <button type ='submit'>Vote</button>
        </form>
    )
}

export default VoteBtn;