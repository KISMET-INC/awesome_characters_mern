import React, { useEffect } from 'react';
import { useState, useCallback } from 'react'
import '../App.css';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Honorable from '../components/Honorable';
import Nav from '../components/Nav.js';
import Test from '../components/Test.jsx';
import '../static/css/Main_Breakpoints.css';


const Main = props => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    

    useEffect (()=>{
        window.addEventListener("resize", ()=>{
            setWindowSize(window.innerWidth)
        
    }, [windowSize])

    
});
    return (
        <>

        <Nav />
        <Featured />
        <Honorable windowSize = {windowSize}/>
        <Footer />
        </>
    )

}

export default Main;