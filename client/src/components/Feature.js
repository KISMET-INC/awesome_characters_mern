
import React, {useState, useContext,useRef,useEffect} from 'react';
import '../App.css';
import '../static/css/Feature.css';
import Context from '../context/Context';
import { navigate } from '@reach/router';
import FeatureInfo from './FeatureInfo';
import FeatureOptions from './FeatureOptions';


const Feature = props => {
const context = useContext(Context)
const [character] = useState(props.character)
const [votes, setVotes] = useState(props.character.votes)
const votesRef = useRef(props.character.votes)
const [rank] = useState(props.rank)
const [location] = useState(props.location)


// useEffect(()=>{
//     console.log("hi")

// })

const updateCharacter = (e,signature,character)=> {
    e.preventDefault()
    setVotes([...votes,signature])
    context.goto_vote(e,character,votes,signature);
}



const resetVotes = (e)=> {
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
    updateCharacter: updateCharacter,
    resetVotes: resetVotes,
}


return(
    <div id = 'feature' className = "feature_post flex">
        <img onClick ={goto_view} src = {character.url} alt = 'character' />
        <FeatureInfo  votes ={votes} character={character} />
        <FeatureOptions pkg = {featureOptionsPkg} />
    </div>

)
}
export default Feature;
