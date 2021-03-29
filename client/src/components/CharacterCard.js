import { navigate } from '@reach/router';
import React, {useState} from 'react';
import '../App.css';
import '../static/css/Character_Card.css';


const CharacterCard = props => {
    const [char] = useState(props.char)


    const clickHandler =(e) =>{
        console.log(e)

        e.target === 'button'? navigate(`/edit/${char._id}`) : navigate (`/view/${char._id}`)
    }





    return( 
        <>
        <div onClick = { clickHandler }id = "character_wrapper" className = 'flex'>
            <img src = {char.url} alt={char.charName} />
            <button>Vote</button>
            <h4>{char.charName}</h4>
            <p>Rank {props.i+1} | Votes: 12 </p>
            <h5>{char.movieTitle}</h5>
        </div>
        </>
    )
}

export default CharacterCard;