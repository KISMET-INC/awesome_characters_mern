import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const SearchBtn = props => {

    const goto_search = () =>{
        navigate('/search')
    }


return (

    <i onClick = { goto_search } className="fas fa-search"></i>
)

}

export default SearchBtn;