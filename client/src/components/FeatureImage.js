import React from 'react'
import '../static/css/FeatureImage.css'




const FeatureImage = ({url, alt, goto_view}) => {


    return (

        <div id= 'Feature_Image'>
            <img onClick = {goto_view} src = {url}  alt = {alt} />
        </div>
    )
}

export default FeatureImage