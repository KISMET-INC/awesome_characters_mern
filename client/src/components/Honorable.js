import { Link } from '@reach/router';
import React from 'react';
import '../App.css';
import Character_Card from './Character_Card';



const Honorable = props => {


    return(
        <div id = "honorable_wrapper">
            <h3>Honorable Mention <Link to= "/search">Click to see all</Link></h3>
            <Character_Card />
        </div>

    )
}

export default Honorable;