
import React, {useState, useContext} from 'react';
import '../App.css';
import Context from '../context/Context';
import { navigate } from '@reach/router';
import FeatureOptions from './FeatureOptions';
import FeatureImage from './FeatureImage';
import VotesMapper from './VotesMapper';
import BasicInfo from './BasicInfo';
import '../static/css/Feature.css';


const Feature = ({character, location, rank, update_character, reset_votes, resultNum}) => {
const context = useContext(Context)
const [votes, setVotes] = useState(character.votes)
const [voted, setVoted] = useState(false)
const [reset, setReset] = useState(false)




const local_update_character = (e,signature,character)=> {
    e.preventDefault()
    if ( !context.votedList.hasOwnProperty(character.charName) ) {
        
        setVotes([context.signature,...character.votes])
        context.goto_vote(e,character,character.votes)
        setVoted(true)
        context.setStartPositionF(rank-1)
    } else {
        alert(`You've already voted for ${character.charName}`)
    }
}



const local_reset_votes = (e)=> {
    e.preventDefault()
    if (context.signature === 'Anonymous'){
        setVotes([context.signature])
        context.setStartPositionF(rank-1)
        setReset(true)
        context.goto_vote(e,character,[]);
    } else {
        alert("Sorry, guests are not allowed to reset votes!")
    }

}

const goto_view =()=> {
    navigate(`/view/${character._id}/${rank}`)
}

const goto_edit =()=> {
    navigate(`/edit/${character._id}/${rank}`)
}

const featureOptionsPkg = {
    rank: rank,
    character: character,
    votes: character.votes,
    location : location,
    goto_view: goto_view,
    goto_edit: goto_edit,
}



return(

    <div id = 'Feature' className = "feature_post flex">
        <FeatureImage reset_votes = {reset_votes} update_character = {update_character} pkg ={featureOptionsPkg} />
        <div id = 'info'>
            <div className = 'flex'>
                <BasicInfo character = {character} />
                <FeatureOptions voted ={voted} voteLabel= "Vote" resetLabel ="Reset Votes"  reset_votes = {local_reset_votes} update_character = {local_update_character} pkg = {featureOptionsPkg} />
            </div>
                
                <VotesMapper votes = {votes} resultNum = {resultNum} />
        </div>
    </div>

)
}
export default Feature;
