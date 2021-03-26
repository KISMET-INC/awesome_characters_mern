import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const AddCharBtn = props => {

    const to_add = () =>{
        navigate('/add')
    }


return (
    <button onClick = { to_add}>Add Character</button>
)

}

export default AddCharBtn;