import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const Add_Char_Btn = props => {

    const to_search = () =>{
        navigate('/add_char')
    }


return (
    <button onClick = { to_search }>Add Character</button>
)

}

export default Add_Char_Btn;