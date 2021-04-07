import React, {useState, useContext} from 'react';
import {navigate} from '@reach/router';
import '../static/css/App.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import axios from 'axios';
import Title from '../components/Title';
import Context from '../context/Context'



const Add = props => {

    // Local
    const  context = useContext(Context)
    const [title] = useState("Add to the Epic...")
    const [subtitle]= useState("Who else is Epic?")

    // To form
    const [errors, setErrors] = useState({})
    const [type] = useState('add')
    const [character] = useState({})
    const [rank] = useState(0)

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




    return(
        <div id = 'Add'>
        <Nav />
        <Title title = {title} subtitle = {subtitle} />
        <Form type ={type} character = {character} rank={rank} submitHandler ={submitHandler} errors ={errors}/>
        </div>
    )
}

export default Add;