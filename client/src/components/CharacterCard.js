import React, { useState, useContext } from 'react';
import '../App.css';
import '../static/css/Character_Card.css';
import VoteBtn from './buttons/VoteBtn';
import Context from '../context/Context';
import ViewBtn from './buttons/ViewBtn';


const CharacterCard = props => {
    const context = useContext(Context)
    const [character] = useState(props.char)
    const [votes, setVotes] = useState(props.char.votes)
    const [rank] = useState(props.i+1)
    const [votedOn, setVotedOn] = useState(false)

    

    const update_character = (e,signature,character)=> {
        e.preventDefault()
        if(!context.votedList.hasOwnProperty(character.charName)){

            setVotes([signature,...votes])
            setVotedOn(true)
            
            context.goto_vote(e,character,votes,signature);
        
        } else {
            alert(`You already voted for ${character.charName}`)
        }
    }

    return( 
        <>
        <div id = "character_wrapper" className = 'flex'>
            <img src = {character.url} alt={character.charName} />
            <VoteBtn votedOn = {votedOn} label = {'Vote'} character ={character} vote ={update_character} />
            <ViewBtn rank = {rank} character_id={character._id} />
            <h4>{character.charName}</h4>
            <p>Rank {rank} | Votes: {votes.length} </p>
            <h5>{character.title}</h5>
        </div>
        </>
    )
}

export default CharacterCard;