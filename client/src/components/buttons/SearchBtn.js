import React from 'react';
import '../../App.css';
import {navigate} from '@reach/router';



const SearchBtn = ({type}) => {

    const go_search = () =>{
        navigate('/search')
    }


return (

        <div id ='Search_Btn'>

            {

                type ==='button' ? <button onClick = { go_search }>Search</button> : <></>

            }

            {
                type === 'icon'?  <i onClick ={ go_search } className="fas fa-search"></i> : <></>
            }

            {
                type === 'link'?  <p onClick ={ go_search }> Search </p> : <></>
            }

        </div>
    )
}

export default SearchBtn;


