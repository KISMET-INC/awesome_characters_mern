import React from 'react';
import { navigate } from '@reach/router';
import '../../App.css';


const EditBtn = props => {

    const goto_edit = ()=> {
        navigate(`/edit/${props.character_id}`)
    }

    return (
        <button onClick = {goto_edit}> Edit</button>
    )
}

export default EditBtn;