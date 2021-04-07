import React from 'react';
import '../../static/css/App.css';
import {navigate} from '@reach/router';



const HomeBtn = ({type}) => {

    const go_home = () =>{
        navigate('/')
    }


return (
    <div id ='Home_Btn'>

    {

        type ==='button' ? <button onClick = { go_home }>Return Home</button> : <></>

    }

    {
        type === 'icon'?  <i onClick ={ go_home } className="fas fa-home"></i> : <></>
    }

    {
        type === 'link'?  <p onClick ={ go_home }> Home </p> : <></>
    }

    </div>
)

}

export default HomeBtn;