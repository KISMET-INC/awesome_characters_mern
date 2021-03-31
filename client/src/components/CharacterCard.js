import React, { useState, useContext, useEffect } from 'react';
import '../App.css';
import '../static/css/Character_Card.css';
import VoteBtn from './buttons/VoteBtn';
import Context from '../context/Context';
import ViewBtn from './buttons/ViewBtn';


const CharacterCard = props => {
    const context = useContext(Context)
    const [character] = useState(props.char)
    const [votes, setVotes] = useState(props.char.votes)
    const [string,setString] = useState(context.val)
    const [rank] = useState(props.i+1)


    const updateCharacter = (e)=> {
        setVotes([...votes,context.val])
        context.goto_vote(e,character,votes,context.val);
    }

    useEffect(()=>{
        console.log('get')
        setString(context.val)
        console.log(context.val)
    },[context.val])

    return( 
        <>
        <div  id = "character_wrapper" className = 'flex'>
            <img src = {character.url} alt={character.charName} />
            <VoteBtn character ={character} vote ={updateCharacter} />
            <ViewBtn rank = {rank} character_id={character._id} />
            <h4>{character.charName}</h4>
            <p>Rank {rank} | Votes: {votes.length} </p>
            <h5>{character.movieTitle}</h5>
        </div>
        </>
    )
}

export default CharacterCard;