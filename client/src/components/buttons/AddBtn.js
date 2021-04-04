import React from 'react';
import '../../App.css';
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

    </div>
)

}

export default AddBtn;

