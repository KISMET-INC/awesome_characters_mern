
import React, {useState, useContext} from 'react';
import '../App.css';
import '../static/css/Feature.css';
import VoteBtn from './buttons/VoteBtn';
import EditBtn from './buttons/EditBtn';
import ViewBtn from './buttons/ViewBtn';
import Context from '../context/Context';
import HomeBtn from './buttons/SearchBtn copy';


const Feature = props => {
const context = useContext(Context)
const [character] = useState(props.character)
const [votes, setVotes] = useState(props.character.votes)
const [string] = useState('feature')



const updateCharacter = (e)=> {
    setVotes([...votes,string])
    context.goto_vote(e,character,votes,string);
}
const resetVotes = (e)=> {
    setVotes([string])
    console.log(votes)
    context.goto_vote(e,character,[],string);
}


return(
    <div id = 'feature' className = "feature_post flex">
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
                <div className = "bottom flex">
                    <h3>Votes:  {votes.length} </h3>
                    {
                        votes.map((vote,i)=>
                        <li key={i}>{vote} </li>
                        )
                    }
                </div>
        </div>
        <div className = "feature_btns flex">
            <h3>Rank {props.i + 1} </h3>
            <HomeBtn/>
            <VoteBtn character = {character} vote={updateCharacter} />
            <ViewBtn character_id = {character._id} />
            <EditBtn character_id = {character._id} />
            <form onSubmit={resetVotes} >
                <button type='submit'>Reset Votes</button>
            </form>
        </div>
    </div>

)
}
export default Feature;
