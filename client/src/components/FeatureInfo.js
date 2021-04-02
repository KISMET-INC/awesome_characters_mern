import React, {useState, useContext, useEffect, useRef} from 'react';
import Context from '../context/Context';


const FeatureInfo = (props) => {
    const [character] = useState(props.character)

    useEffect(()=>{
        console.log('propsvotes changed')
    },[props.votes])




    return (

        <div className = "feature_info">
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
        <div className = "bottom flex">
            <h3>Votes:  {props.votes.length} </h3>
            {
                props.votes.map((vote,i)=>
                <li key={i}>{vote} </li>
                )
            }
        </div>
    </div>

    )
}

export default FeatureInfo;

