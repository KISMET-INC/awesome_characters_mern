import React from 'react'
import '../static/css/FeatureImage.css'
import FeatureOptions from './FeatureOptions'




const FeatureImage = ({url, alt, goto_view}) => {


    return (

        <section id= 'Feature_Image'>
            <img onClick = {goto_view} src = {url}  alt = {alt} />
            <div className = 'image_info'>
                <div className = 'background'>
                    <h3>Rank  1</h3>
                    <h3>Tyler Duren</h3>
                    <h4>Votes: 5 | VOTE!</h4>
                    <h5 onClick = {goto_view}> Click to View  |  Click to Edit </h5>
                </div>
            </div>
        </section>

        
    )
}

export default FeatureImage