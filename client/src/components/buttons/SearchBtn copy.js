import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const HomeBtn = props => {

    const goto_home = () =>{
        navigate('/')
    }


return (

    <button onClick = { goto_home }>Return Home</button>
)

}

export default HomeBtn;