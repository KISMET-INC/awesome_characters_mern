import React, { useState } from 'react';
import VoteBtn from '../components/buttons/VoteBtn';
import HomeBtn from '../components/buttons/HomeBtn';


// const featureOptionsPkg = {
//     rank: rank,
//     character: character,
//     location : location,
//     goto_view: goto_view,
//     goto_edit: goto_edit,
//     votes: votes,
//     updateCharacter: updateCharacter
// }

const FeatureOptions = (props) => {
    const [rank] = useState(props.pkg.rank)
    const [character] = useState(props.pkg.character)
    const [location] = useState(props.pkg.location)
    const [votes] = useState(props.pkg.votes)

    

    return (

        <>

            <div id='FeatureOptions' className = "feature_btns flex">
                <h3>Rank {rank} </h3>
                <div className = 'feature buttons_info'>
                        <h3>{character.charName}</h3>
                        {
                            location !== 'view' ? <h4 onClick={props.pkg.goto_view}>Click to View</h4> : <></>
                        }
                        <h4 onClick={props.pkg.goto_edit}>Click to Edit</h4>
                        <h4>Votes: {votes.length}</h4>
                </div>
                <VoteBtn character = {character} vote={props.pkg.updateCharacter} />
                <form onSubmit={props.pkg.resetVotes} >
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