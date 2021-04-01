import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { navigate } from '@reach/router';



const Edit = props => {
    const [title] = useState("Edit the EPIC...")
    const [subtitle, setSubtitle] = useState("");
    const [character,setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)
    const [type] = useState('edit')
    const [rank] = useState(props.rank)
    

    useEffect (()=> {
        axios.get(`http://localhost:8000/api/characters/${props.id}`)
            .then(response => {

                setSubtitle(response.data.charName)
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
            navigate(`/view/${props.id}/${rank}`)
        }).catch (error => {
            console.log(error)
        })
    

    }

    return (
        <>
            <Nav />
            <div className='edit_body wrapper'>
            {
                characterLoaded && <Form rank= {rank} type ={type} character = {character} title = {title}  subtitle = {subtitle} submitHandler = { submitHandler }/>

            }
            </div>
            <Footer />
        </>
    )
}
export default Edit;