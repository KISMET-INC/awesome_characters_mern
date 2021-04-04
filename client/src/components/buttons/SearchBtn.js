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

            {
            type === 'link_icon'?  <div className = 'link_icon' onClick ={ go_search }><p> Search  </p> <i className="fas fa-search"></i></div>: <></>
        }

        </div>
    )
}

export default SearchBtn;


