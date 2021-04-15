
import React, {useState, useContext} from 'react';
import '../static/css/App.css';
import Context from '../context/Context';
import { navigate } from '@reach/router';
import FeatureOptions from './FeatureOptions';
import FeatureImage from './FeatureImage';
import VotesMapper from './VotesMapper';
import BasicInfo from './BasicInfo';
import '../static/css/Feature.css';


const Feature = ({character, location, rank, root_update_character, root_reset_votes, resultNum}) => {
const context = useContext(Context)
const [votes, setVotes] = useState(character.votes)


const feature_update_character = (e)=> {
    context.update_character(e,character,setVotes)
}

const feature_reset_votes = (e)=> {
    context.reset_votes(e,character,setVotes)
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
    location : location,
    goto_view: goto_view,
    goto_edit: goto_edit,
}



return(

    <div id = 'Feature' className = "feature_post flex">
        <FeatureImage update_character= {root_update_character} reset_votes = {root_reset_votes} pkg ={featureOptionsPkg} />
        <div id = 'info'>

        
            <div className = 'flex'>
                <BasicInfo character = {character} />
                <FeatureOptions voteLabel= "Vote" resetLabel ="Reset Votes"  reset_votes = {feature_reset_votes} update_character = {feature_update_character} pkg = {featureOptionsPkg} />
            </div>
                
                <VotesMapper votes = {votes} resultNum = {resultNum} />
        </div>
    </div>

)
}
export default Feature;
