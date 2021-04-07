import React, { useState } from 'react';
import VoteBtn from '../components/buttons/VoteBtn';
import HomeBtn from '../components/buttons/HomeBtn';
import '../static/css/FeatureOptions.css'
import { Link } from '@reach/router';


const FeatureOptions = ({voted, pkg, voteLabel,reset_votes, resetLabel, update_character}) => {
    const [rank] = useState(pkg.rank)
    const [character] = useState(pkg.character)
    const [location] = useState(pkg.location)

    

    return (

            <div id='Feature_Options' className = "feature_btns flex">
                <h3>Rank {rank} </h3>
                <section className = 'feature_links'>
                        <h3>{character.charName}</h3> 
                        {
                            location !== 'view' ? <Link to ={`/view/${character._id}/${rank}/`}><h4 className="view" >Click to View</h4></Link>: <></>
                        }
                        
                        <Link to ={`/edit/${character._id}/${rank}/`}><h4 >Click to Edit</h4></Link>
                </section>

                <section className ='feature_buttons'>
                    <VoteBtn votedOn ={voted} label ={voteLabel} character = {character} vote={update_character} />
                    <VoteBtn label = {resetLabel} character={character} vote ={reset_votes} />
                    {
                        location !== 'carousel' ?  <HomeBtn/> : <></>
                    }
                </section>
            </div>
            
        
    

    )
}

export default FeatureOptions;