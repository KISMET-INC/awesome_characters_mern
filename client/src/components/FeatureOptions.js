import React, { useState } from 'react';
import VoteBtn from '../components/buttons/VoteBtn';
import HomeBtn from '../components/buttons/HomeBtn';
import '../static/css/FeatureOptions.css'

// const featureOptionsPkg = {
//     rank: rank,
//     character: character,
//     location : location,
//     goto_view: goto_view,
//     goto_edit: goto_edit,
//     votes: votes,
// }

const FeatureOptions = ({pkg, voteLabel,reset_votes, resetLabel, update_character}) => {
    const [rank] = useState(pkg.rank)
    const [character] = useState(pkg.character)
    const [location] = useState(pkg.location)

    

    return (

        

            <div id='Feature_Options' className = "feature_btns flex">
                <h3>Rank {rank} </h3>
                <section className = 'feature_links'>
                        <h3>{character.charName}</h3> 
                        {
                            location !== 'view' ? <h4 onClick={pkg.goto_view}>Click to View</h4> : <></>
                        }
                        <h4 onClick={pkg.goto_edit}>Click to Edit</h4>
                </section>

                <section className ='feature_buttons'>
                    <VoteBtn label ={voteLabel} character = {character} vote={update_character} />
                   <VoteBtn label = {resetLabel} character={character} vote ={reset_votes} />
                    {
                        location !== 'carousel' ?  <HomeBtn/> : <></>
                    }
                </section>
            </div>
            
        
    

    )
}

export default FeatureOptions;