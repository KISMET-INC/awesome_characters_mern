import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const AddCharIcon = props => {

    const to_add = () =>{
        navigate('/add')
    }


    return (
        <i onClick = { to_add } className="fas fa-plus-square"></i>
    )

}

export default AddCharIcon;