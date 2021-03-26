import React from 'react';
import '../App.css'
import AddForm from '../components/Form';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../static/css/Main_Breakpoints.css'


const Add = props => {


    return(
        <>
        <Nav />
        <AddForm />
        <Footer />
        </>
    )
}

export default Add;