import React from 'react';
import { navigate } from '@reach/router';
import '../../App.css';


const EditBtn = props => {

    const goto_edit = ()=> {
        navigate('/edit')
    }

    return (
        <button onClick = {goto_edit}> Edit</button>
    )
}

export default EditBtn;