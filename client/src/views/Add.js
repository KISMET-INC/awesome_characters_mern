import React, {useState} from 'react';
import {navigate} from '@reach/router';
import '../App.css'
import Form from '../components/Form';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';



const Add = props => {
    const [title] = useState("Add to the Epic...")
    const [subtitle]= useState("Who do you think is an epic movie character?")
    const [character] = useState({
        charName: "",
        title: "",
        year:"",
        actor: "",
        votes: "",
        url: "https://aatfweb.files.wordpress.com/2017/06/film.jpg",
        quote: ""
    })
    const [type] = useState('add')

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
        <Form type = {type} character = {character } title = {title} subtitle ={subtitle} submitHandler = {submitHandler} />
        </>
    )
}

export default Add;