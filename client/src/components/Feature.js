
import React, {useState, useContext, useEffect} from 'react';
import '../App.css';
import '../static/css/Feature.css';
import VoteBtn from './buttons/VoteBtn';
import EditBtn from './buttons/EditBtn';
import ViewBtn from './buttons/ViewBtn';
import Context from '../context/Context';
import HomeBtn from './buttons/SearchBtn copy';
import { navigate } from '@reach/router';


const Feature = props => {
const context = useContext(Context)
const [character] = useState(props.character)
const [votes, setVotes] = useState(props.character.votes)
const [string,setString] = useState(context.val)
const [rank] = useState(props.rank)


const updateCharacter = (e,string)=> {
    setVotes([...votes,string])
    context.goto_vote(e,character,votes,string);
}
const resetVotes = (e)=> {
    setVotes([string])
    context.goto_vote(e,character,[],string);
}

const goto_view =()=> {
    navigate(`/view/${character._id}/${rank}`)
}

const goto_edit =()=> {
    navigate(`/edit/${character._id}/${rank}`)
}


return(
    <div id = 'feature' className = "feature_post flex">
            <img onClick ={goto_view} src = {character.url} alt = 'character' />
        
        
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
            <h3>Rank {rank} </h3>
            <div className = 'feature buttons_info'>
                    <h3>{character.charName}</h3>
                    <h4 onClick={goto_view}>Click to View</h4>
                    <h4 onClick={goto_edit}>Click to Edit</h4>
                    <h4>Votes: {votes.length}</h4>
            </div>
            <VoteBtn character = {character} vote={updateCharacter} />
            <ViewBtn rank = {rank} character_id = {character._id} />
            <EditBtn rank = {rank} character_id = {character._id} />
            <form onSubmit={resetVotes} >
                <button type='submit'>Reset Votes</button>
            </form>
            <HomeBtn/>

        </div>
    </div>

)
}
export default Feature;
