import React, {useState, useContext} from 'react';
import {navigate} from '@reach/router';
import '../App.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import axios from 'axios';
import Title from '../components/Title';
import Context from '../context/Context'



const Add = props => {
    const [title] = useState("Add to the Epic...")
    const [subtitle]= useState("Who do you think is an epic movie character?")
    const [errors, setErrors] = useState({})
    const  context = useContext(Context)

    const submitHandler = ( e, data) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/characters/new", {...data, 'votes': [context.signature]})
        .then( response => {
    
            if(response.data.hasOwnProperty('error')){
                setErrors(response.data.error.errors)

                navigate('/add');
                
            } else {
                navigate(`/view/${response.data.character._id}/${context.totalCharacters+1}`)
            }
        }).catch ( error => {
            console.log(error)
        });

    }

    const formPkg = {
        rank: '',
        type: '',
        character: {'rank':'0'},
        signature: 'Anonymous',
        submitHandler: submitHandler,
    }
    return(
        <>
        <Nav />
        <Title title = {title} subtitle = {subtitle} />
        <Form pkg = {formPkg} errors ={errors}/>
        </>
    )
}

export default Add;