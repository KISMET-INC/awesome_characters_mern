import React from 'react';
import '../App.css'
import Character_Card from '../components/Character_Card';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Honorable from '../components/Honorable';
import Nav from '../components/Nav.js';


const Main = props => {


    return (
        <>
        <Nav />
        <Featured />
        <Honorable />
        <Footer />
        </>
    )

}

export default Main;