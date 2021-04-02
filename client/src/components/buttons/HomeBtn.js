import React, {useState} from 'react';
import '../../App.css';
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

    </>
)

}

export default HomeBtn;