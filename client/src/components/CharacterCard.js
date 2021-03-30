import { navigate } from '@reach/router';
import React, { useState } from 'react';
import '../App.css';
import '../static/css/Character_Card.css';
import axios from 'axios';
import VoteBtn from './buttons/VoteBtn';


const CharacterCard = props => {
    const [character, setCharacter] = useState(props.char)
    const [votes, setVotes] = useState([props.char.votes])


    const clickHandler =(e) =>{
        console.log(e)

        e.target === 'button'? navigate(`/edit/${character._id}`) : navigate (`/view/${character._id}`)
    }
    

    const goto_vote =(e) =>{
        e.preventDefault();
        console.log("characterCard")
        console.log(character.votes)
        // console.log(context.val)
        axios.put(`http://localhost:8000/api/characters/edit/${character._id}`, { votes : [...character.votes, "Kristen"]})
        .then(response => {
            setCharacter({...character, votes: [...character.votes, "Kristen"]})
            setVotes([ ...character.votes, "Kristen"])
            console.log(votes)
        }).catch ( error => {
            console.log(error)
        })
    }




    return( 
        <>
        <div  id = "character_wrapper" className = 'flex'>
            <img src = {character.url} alt={character.charName} />
            <VoteBtn vote ={goto_vote} />
            <h4>{character.charName}</h4>
            <p>Rank {props.i+1} | Votes: {character.votes.length}</p>
            <h5>{character.movieTitle}</h5>
        </div>
        </>
    )
}

export default CharacterCard;