
import React, {useState, useContext, useEffect} from 'react';
import '../App.css';
import '../static/css/Featured.css';
import VoteBtn from './buttons/VoteBtn';
import EditBtn from './buttons/EditBtn';
import ViewBtn from './buttons/ViewBtn';
import Context from '../context/Context';


const Feature = props => {
const context = useContext(Context)
const [character] = useState(props.char)
const [votes, setVotes] = useState(props.char.votes)



const updateCharacter = (e,character)=> {
    context.goto_vote(e,character);
    setVotes([...votes,"Khalil"])
}


return(
<div className = 'carousel_item'>
    <div className = "feature_post film_strip flex">
        <img src = {character.url} alt = 'character' />
        
        <div className = "feature_info">
                <div className ="top">
                    <h3>{character.charName}</h3>
                    <p>{character.year}</p>
                    <p>{character.movieTitle}</p>
                </div>
                <div className = "middle">
                    <h3>Quote:</h3>
                    {
                        character.quote === undefined ? <p></p> : <p>"{character.quote}"</p>
                    }
                </div>
                <div className = "bottom">
                    <h3>Votes:  {votes.length} </h3>
                    {
                        votes === undefined ? <p></p> : <p>{votes}</p>
                    }
                </div>
        </div>
        <div className = "feature_btns flex">
            <h3>Rank N/A </h3>
            <VoteBtn character = {character} vote={updateCharacter} />
            <EditBtn character_id = {character._id} />
            <ViewBtn character_id = {character._id} />
        </div>

    </div>
</div>


)
}
export default Feature;
