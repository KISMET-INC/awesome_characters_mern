import React from 'react';
import {navigate} from '@reach/router'
import '../App.css';
import '../static/css/Nav.css'
import clapper from '../static/img/clapper.png'; 
import AddCharBtn from './buttons/AddCharBtn';
import SearchBtn from './buttons/SearchBtn';
import Signature from './buttons/Signature';


const Nav = props => {

    const go_home = () =>{
        navigate('/')
    }
    
    return (
        <nav className="flex">
            <div className = "inner_nav flex">
                <section className="nav_left flex">
                    <img onClick={go_home} src ={clapper} alt= "movie clapper icon" />
                    
                    <div className ="heading">
                        <p>Rate your favorite movie characters</p>
                        <h1>Epic Movie Characters</h1>
                    </div>
                </section>

                <section className ="nav_right flex">
                    <div className="flex">
                        <i  onClick ={ go_home }className="fas fa-home"></i>
                        <SearchBtn />
                        <AddCharBtn />
                    </div> 
                    <Signature />
                </section>
            </div>
        </nav>
    )
}
export default Nav;