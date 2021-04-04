
import React, {useState, useContext, useEffect} from 'react';
import '../App.css';
import Context from '../context/Context';
import { navigate } from '@reach/router';
import FeatureOptions from './FeatureOptions';
import FeatureImage from './FeatureImage';
import VotesMapper from './VotesMapper';
import Quote from './Quote';
import BasicInfo from './BasicInfo';
import '../static/css/Feature.css';


const Feature = ({character, location, rank, update_character, reset_votes, resultNum}) => {
const context = useContext(Context)
const [votes, setVotes] = useState(character.votes)




const local_update_character = (e,signature,character)=> {
    e.preventDefault()
    setVotes([signature,...votes])
    context.goto_vote(e,character,votes,signature);
    context.setReloadedLocal((prev)=> prev + 1)
}

useEffect(()=> {
    setVotes([context.signature,...votes])
},[context.reloadedBase])


const local_reset_votes = (e)=> {
    e.preventDefault()
    setVotes([context.signature])
    context.goto_vote(e,character,[],context.signature);
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
                <FeatureOptions voteLabel= "Vote" resetLabel ="Reset Votes"  reset_votes = {local_reset_votes} update_character = {local_update_character} pkg = {featureOptionsPkg} />
            </div>
                <Quote character = {character} />
                <VotesMapper votes = {votes} resultNum = {resultNum} />
        </div>
    </div>

)
}
export default Feature;
