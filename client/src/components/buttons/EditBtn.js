import React from 'react';
import { navigate } from '@reach/router';
import '../../static/css/App.css';


const EditBtn = props => {

    const goto_edit = ()=> {
        navigate(`/edit/${props.character_id}/${props.rank}`)
    }

    return (
        <button onClick = {goto_edit}> Edit</button>
    )
}

export default EditBtn;