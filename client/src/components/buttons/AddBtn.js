import React from 'react';
import '../../static/css/App.css';

import {navigate} from '@reach/router';



const AddBtn = ({type}) => {

    const go_add = () =>{
        navigate('/add')
    }


return (
    <div id ='Add_Btn'>

        {

            type ==='button' ? <button onClick = { go_add }>Add</button> : <></>

        }

        {
            type === 'icon'?  <i onClick ={ go_add } className="fas fa-plus-square"></i> : <></>
        }

        {
            type === 'link'?  <p onClick ={ go_add }> Add </p> : <></>
        }
        {
            type === 'link_icon'?  <div    className = 'link_icon' onClick ={ go_add } ><p> Add  </p> <i className="fas fa-plus-square"></i></div>: <></>
        }

    </div>
)

}

export default AddBtn;

