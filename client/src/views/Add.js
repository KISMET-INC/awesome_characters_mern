import React from 'react';
import '../App.css'
import Form from '../components/Form';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../static/css/Main_Breakpoints.css'


const Add = props => {

    const submitHandler = ( e, data) => {
        e.preventDefault

    }


    return(
        <>
        <Nav />
        <Form submitHandler = {submitHandler} />
        <Footer />
        </>
    )
}

export default Add;