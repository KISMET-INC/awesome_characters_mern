import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import { navigate } from '@reach/router';
import Title from '../components/Title';



const Edit = props => {
    const [title] = useState("Edit the EPIC...")
    // const [subtitle, setSubtitle] = useState("");
    const [character,setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)
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
        console.log("SUBMIT")
        axios.put(`http://localhost:8000/api/characters/edit/${props.id}`, data)
        .then(response => {

            console.log(response)

            if(response.data.hasOwnProperty('error')){
                console.log(response.data)
                setErrors(response.data.error.errors)

                navigate(`/edit/${character._id}/${rank}`);
                
            } else {

                navigate(`/view/${props.id}/${rank}`)
            }
    
            console.log(response)
        }).catch (error => {
            console.log(error)
        })

    }

    const formPkg = {
        rank: rank,
        type: type,
        character: character,
        submitHandler: submitHandler,
    }

    return (
        <>
        <Nav />
            <div className='edit_body wrapper'>
            {
                characterLoaded && <Title subtitle={character.charName} title={title} />

            }
            
            {
                characterLoaded && <Form errors = {errors} pkg = {formPkg} />

            }
            </div>
        </>
    )
}
export default Edit;