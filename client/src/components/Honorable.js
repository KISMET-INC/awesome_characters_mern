import { Link } from '@reach/router';
import React from 'react';
import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';





const Honorable = props => {

    return(
        <div id = "honorable_wrapper">
            <h3> ★ Honorable Mentions ★ <Link to= "/search"><span className= 'link'>Click to see all</span></Link></h3>
    
                {
                    props.characterList.map((char,i) => 
                        <CharacterCard key={i} char={char} />
                    )
                }
                
    
                </div>


    )
}


export default Honorable;