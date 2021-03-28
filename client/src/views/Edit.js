import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css'
import Form from '../components/Form';
import Nav from '../components/Nav';
import Footer from '../components/Footer';



const Edit = props => {
    const [title] = useState("Edit the EPIC...")
    const [subtitle, setSubtitle] = useState("");
    const [character,setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)

    useEffect (()=> {
        axios.get(`http://localhost:8000/api/characters/${props.id}`)
            .then(response => {
                console.log(response.data);
                setSubtitle(response.data.charName)
                setCharacter(response.data)
                setCharacterLoaded(true)
            }).catch(errors => {
                console.log(errors)
            })
    },[])


    const submitHandler = (e, data) => {

    }

    return (
        <>
            <Nav />
            {
                characterLoaded && <Form type ="edit" character = {character} title = {title}  subtitle = {character.charName} submitHandler = { submitHandler }/>

            }
            <Footer />
        </>
    )
}
export default Edit;