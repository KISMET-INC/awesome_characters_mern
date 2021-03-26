import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const SearchBtn = props => {

    const goto_search = () =>{
        navigate('/search')
    }


return (
    <button onClick = { goto_search }>Search</button>
)

}

export default SearchBtn;