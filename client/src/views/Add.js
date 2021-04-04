import React, {useState} from 'react';
import {navigate} from '@reach/router';
import '../App.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import axios from 'axios';
import Title from '../components/Title';


const Add = props => {
    const [title] = useState("Add to the Epic...")
    const [subtitle]= useState("Who do you think is an epic movie character?")

    const submitHandler = ( e, data) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/characters/new", data)
        .then( response => {
            console.log(response === 'data')
            console.log(response.data.hasOwnProperty('error'));
            console.log(response)
            navigate('/');
        }).catch ( error => {
            console.log(error)
        });

    }

    const formPkg = {
        rank: '',
        type: '',
        character: {url: "https://aatfweb.files.wordpress.com/2017/06/film.jpg"},
        submitHandler: submitHandler,
    }
    return(
        <>
        <Nav />
        <Title title = {title} subtitle = {subtitle} />
        <Form pkg = {formPkg} />
        </>
    )
}

export default Add;