import React from 'react';
import '../App.css';
import '../static/css/Character_Card.css';


const CharacterCard = props => {




    return( 
        <>
        <div id = "character_wrapper" className = 'flex'>
            <img src = "https://i.pinimg.com/originals/8e/4a/a4/8e4aa4690779c21a6b9c0927f63b8d4b.jpg"alt="character" />
            <button>Vote</button>
            <h4>TYLER DURDEN</h4>
            <p>Rank 5 | Votes: 12 </p>
            <h5>Fight Club</h5>
        </div>
        </>
    )
}

export default CharacterCard;