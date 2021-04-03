import React from 'react'
import '../static/css/FeatureImage.css'
import VoteBtn from './buttons/VoteBtn'
import FeatureOptions from './FeatureOptions'




const FeatureImage = ({pkg, reset_votes, update_character}) => {


    return (

        <section id= 'Feature_Image'>
            <img onClick = {pkg.goto_view} src = {pkg.character.url}  alt = {pkg.character.charNam} />
            <div className = 'image_info'>
                <div className = 'background'>
                    {/* <h3>Rank {pkg.rank} </h3>
                    <h3>{pkg.character.charName}</h3>
                    <div className = 'image_links flex'>
                        <VoteBtn label ={'VOTE'} character ={pkg.character} vote = {pkg.updateCharacter} />
                        <h5 onClick ={pkg.goto_edit}> Click to Edit </h5> */}
                        <FeatureOptions voteLabel ={'VOTE'} resetLabel ={'RESET VOTES'} reset_votes= {reset_votes} update_character = {update_character} pkg = {pkg} />
                    </div>
    
                </div>
        
        </section>

        
    )
}

export default FeatureImage