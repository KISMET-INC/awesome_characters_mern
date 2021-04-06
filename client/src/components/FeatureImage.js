import React from 'react'
import '../static/css/FeatureImage.css'
import FeatureOptions from './FeatureOptions'




const FeatureImage = ({pkg, reset_votes, update_character}) => {


    return (

        <section id= 'Feature_Image'>
            <img onClick = {pkg.goto_view} src = {pkg.character.url}  alt = {pkg.character.charNam} />
            <div className = 'image_info'>
                <div className = 'background'>
                        <FeatureOptions 
                        voteLabel ={'VOTE'} 
                        resetLabel ={'RESET VOTES'} 
                        reset_votes= {reset_votes} update_character = {update_character} 
                        pkg = {pkg} />
                    </div>
    
                </div>
        
        </section>

        
    )
}

export default FeatureImage