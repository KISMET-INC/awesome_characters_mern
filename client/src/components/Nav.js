import React from 'react';
import {navigate} from '@reach/router'
import '../App.css';
import '../static/css/Nav.css'
import clapper from '../static/img/clapper.png'; 
import AddCharIcon from './buttons/AddCharIcon';
import SearchBtn from './buttons/SearchBtn';
import SimpleMenu from './SimpleMenu';
import TransitionsModal from './TransitionalModal';
import HomeBtn from './buttons/HomeBtn';


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
                        <HomeBtn type = 'icon'/>
                        <SearchBtn />
                        <AddCharIcon />
                    </div>
                        <TransitionsModal />
                </section>
                <SimpleMenu />
            </div>
        </nav>
    )
}
export default Nav;