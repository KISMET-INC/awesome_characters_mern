import React from 'react';
import { navigate } from '@reach/router';
import '../../App.css';


const ViewBtn = props => {

    const goto_view = ()=> {
        navigate(`/view/${props.character_id}/${props.rank}`)
    }

    return (
        <button onClick = {goto_view}> View </button>
    )
}

export default ViewBtn;