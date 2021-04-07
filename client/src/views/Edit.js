import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import '../App.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import { navigate } from '@reach/router';
import Title from '../components/Title';
import Context from '../context/Context'


const Edit = props => {
    const context = useContext(Context)

    const [title] = useState("Edit the EPIC...")
    const [characterLoaded, setCharacterLoaded] = useState(false)
    
    const [character,setCharacter] = useState({})
    const [type] = useState('edit')
    const [rank] = useState(props.rank)
    const [errors, setErrors] = useState({})

    
    useEffect (()=> {
        axios.get(`http://localhost:8000/api/characters/${props.id}`)
            .then(response => {

                setCharacter(response.data)
                setCharacterLoaded(true)
            }).catch(errors => {
                console.log(errors)
            })
    },[props.id])


    const submitHandler = (e, data) => {
        e.preventDefault();
        if (context.signature === context.adminName){
            axios.put(`http://localhost:8000/api/characters/edit/${props.id}`, data)
            .then(response => {

                if(response.data.hasOwnProperty('error')){
                    setErrors(response.data.error.errors)

                    navigate(`/edit/${character._id}/${rank}`);
                    
                } else {

                    navigate(`/view/${props.id}/${rank}`)
                }
        
            }).catch (error => {
                console.log(error)
            })
        } else {
            alert("Sorry, only admins can edit characters")
        }

    }



    return (
        <div id = 'Edit'>
        <Nav />
            {
                characterLoaded && <Title subtitle={character.charName} title={title} />

            }
            
            {
                characterLoaded && <Form type = {type} character ={character} rank={rank} submitHandler={submitHandler} errors = {errors}  />

            }
        </div>
    )
}
export default Edit;