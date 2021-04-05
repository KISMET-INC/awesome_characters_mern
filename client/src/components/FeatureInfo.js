import React from 'react';

import '../static/css/Feature_Info.css'
import BasicInfo from './BasicInfo';



const FeatureInfo = ({character}) => {


    return (

        <div id = "Feature_Info">
            <BasicInfo character = { character } />
        </div>

    )
}

export default FeatureInfo;

