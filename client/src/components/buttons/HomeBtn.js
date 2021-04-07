import React, {useState} from 'react';
import '../../static/css/App.css';
import {navigate} from '@reach/router';



const HomeBtn = props => {
    const [type] = useState(props.type)

    const go_home = () =>{
        navigate('/')
    }


return (
    <>

    {

        type ==='button' ? <button onClick = { go_home }>Return Home</button> : <></>

    }

    {
        type === 'icon'?  <i onClick ={ go_home } className="fas fa-home"></i> : <></>
    }

    {
        type === 'link'?  <p onClick ={ go_home }> Home </p> : <></>
    }

    {
        type === 'link_icon'?  <div  className = 'link_icon' onClick ={ go_home } ><p> Home </p> <i className="fas fa-home"></i></div>: <></>
    }

    </>
)

}

export default HomeBtn;