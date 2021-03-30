import { navigate } from '@reach/router';
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
    const [string] = useState('CharCard')


    const clickHandler =(e) =>{
        console.log(e)

        e.target === 'button'? navigate(`/edit/${character._id}`) : navigate (`/view/${character._id}`)
    }
    

    const updateCharacter = (e)=> {
        setVotes([...votes,string])
        context.goto_vote(e,character,votes,string);
    }
    
    




    return( 
        <>
        <div  id = "character_wrapper" className = 'flex'>
            <img src = {character.url} alt={character.charName} />
            <VoteBtn character ={character} vote ={updateCharacter} />
            <ViewBtn character_id={character._id} />
            <h4>{character.charName}</h4>
            <p>Rank {props.i+1} | Votes: {votes.length}</p>
            <h5>{character.movieTitle}</h5>
        </div>
        </>
    )
}

export default CharacterCard;