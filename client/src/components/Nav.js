import React from 'react';
import {navigate} from '@reach/router'
import '../static/css/App.css';
import '../static/css/Nav.css'
import clapper from '../static/img/clapper.png'; 
import AddBtn from './buttons/AddBtn';
import SearchBtn from './buttons/SearchBtn';
import SimpleMenu from './SimpleMenu';
import NameModal from './NameModal';
import HomeBtn from './buttons/HomeBtn';
import ScrollAnimation from 'react-animate-on-scroll';


const Nav = props => {

    const go_home = () =>{
        navigate('/')
    }
    
    return (
        <>
        <ScrollAnimation        
        animateOnce = {true}
        offset ={5}
        duration={1}
        initiallyVisible={true}
        animateIn="slideInDown">
        <nav id= 'Nav' className="bar flex">
            <div className = "wrapper flex">
                <section className="left logo flex">
                    <img onClick={go_home} src ={clapper} alt= "movie clapper icon" />
                    
                    <div className ="titles">
                        <p>Rate your favorite movie characters</p>
                        <h1>Epic Movie Characters</h1>
                    </div>
                </section>

                <section className ="right links flex">
                    <div className="buttons flex">
                        <HomeBtn type = 'icon'/>
                        <SearchBtn type = 'icon' />
                        <AddBtn type = 'icon' />
                    </div>
                        <NameModal />
                </section>
                <SimpleMenu />
            </div>
        </nav>
        </ScrollAnimation>


        

            </>
        
    )
}
export default Nav;