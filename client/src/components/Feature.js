
import React, {useState, useContext,useRef,useEffect} from 'react';
import '../App.css';
import Context from '../context/Context';
import { navigate } from '@reach/router';
import FeatureOptions from './FeatureOptions';
import FeatureImage from './FeatureImage';
import VotesMapper from './VotesMapper';
import Quote from './Quote';
import BasicInfo from './BasicInfo';
import '../static/css/Feature.css';


const Feature = ({pkg,update_character, reset_votes}) => {
const context = useContext(Context)
const  [character] = useState(pkg.character)
const [votes, setVotes] = useState(character.votes)



// useEffect(()=>{
//     console.log("hi")

// })

const local_update_character = (e,signature,character)=> {
    e.preventDefault()
    setVotes([...votes,signature])
    context.goto_vote(e,character,votes,signature);
}



const local_reset_votes = (e)=> {
    e.preventDefault()
    setVotes([context.signature])
    context.goto_vote(e,character,[],context.signature);
}

const goto_view =()=> {
    navigate(`/view/${character._id}/${pkg.rank}`)
}

const goto_edit =()=> {
    navigate(`/edit/${character._id}/${pkg.rank}`)
}

const featureOptionsPkg = {
    rank: pkg.rank,
    character: character,
    votes: character.votes,
    location : pkg.location,
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
                <VotesMapper votes = {votes} resultNum = {pkg.resultNum} />
        </div>
    </div>

)
}
export default Feature;
