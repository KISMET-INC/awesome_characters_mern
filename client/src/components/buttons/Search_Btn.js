import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const Search_Btn = props => {

    const goto_search = () =>{
        navigate('/search')
    }


return (
    <button onClick = { goto_search }>Search</button>
)

}

export default Search_Btn;