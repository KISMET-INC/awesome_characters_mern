import React from 'react';
import {navigate} from '@reach/router';
import '../App.css'
import Form from '../components/Form';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../static/css/Main_Breakpoints.css';
import axios from 'axios';



const Add = props => {

    const submitHandler = ( e, data) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/characters/new", data)
        .then( response => {
            console.log(response)
            navigate('/');
        }).catch ( error => {
            console.log(error)
        });

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