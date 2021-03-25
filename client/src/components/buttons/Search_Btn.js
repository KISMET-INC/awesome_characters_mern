import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const Search_Btn = props => {

    const to_search = () =>{
        navigate('/search')
    }


return (
    <button onClick = { to_search }>Search</button>
)

}

export default Search_Btn;