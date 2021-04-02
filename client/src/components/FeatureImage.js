import React from 'react'
import '../static/css/FeatureImage.css'
import FeatureOptions from './FeatureOptions'




const FeatureImage = ({url, alt, goto_view}) => {


    return (

        <div id= 'Feature_Image'>
            <img onClick = {goto_view} src = {url}  alt = {alt} />

        </div>
    )
}

export default FeatureImage