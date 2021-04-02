import React, {useState, useContext, useEffect, useRef} from 'react';
import Context from '../context/Context';
import '../static/css/Feature_Info.css'
import VotesMapper from './VotesMapper';


const FeatureInfo = (props) => {
    const [character] = useState(props.character)

    useEffect(()=>{
        console.log('propsvotes changed')
    },[props.votes])




    return (

        <div id = "Feature_Info" className = 'flex'>
        <div className = 'left'>
            <div className ="top">
                <h3>{character.charName}</h3>
                <p>{character.year}</p>
                <p>{character.movieTitle}</p>
                <p>{character.actor}</p>
            </div>
            <div className = "middle">
                <h3>Quote:</h3>
                {
                    character.quote === undefined ? <p></p> : <p>"{character.quote}"</p>
                }
            </div>
        </div>
        {/* <div className = "bottom ">
            <h3>Votes:  {props.votes.length} </h3>
            <ul className = 'votes flex'>
            {
                props.votes.map((vote,i)=>
                <li key={i}>{vote} </li>
                )
            }
            </ul>
        </div> */}

        {/* <VotesMapper votes = {props.votes} /> */}
    </div>

    )
}

export default FeatureInfo;

