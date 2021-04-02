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
//     updateCharacter: updateCharacter
// }

const FeatureOptions = ({pkg}) => {
    const [rank] = useState(pkg.rank)
    const [character] = useState(pkg.character)
    const [location] = useState(pkg.location)
    const [votes] = useState(pkg.votes)

    

    return (

        <>

            <div id='Feature_Options' className = "feature_btns flex">
                <h3>Rank {rank} </h3>
                <div className = 'feature_links'>
                        <h3>{character.charName}</h3>
                        {
                            location !== 'view' ? <h4 onClick={pkg.goto_view}>Click to View</h4> : <></>
                        }
                        <h4 onClick={pkg.goto_edit}>Click to Edit</h4>
                </div>
                <VoteBtn character = {character} vote={pkg.updateCharacter} />
                <form onSubmit={pkg.resetVotes} >
                    <button type='submit'>Reset Votes</button>
                </form>
                {
                    location !== 'carousel' ?  <HomeBtn/> : <></>
                }
            </div>
            
        
        </>

    )
}

export default FeatureOptions;