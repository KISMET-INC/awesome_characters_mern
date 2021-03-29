import React, {useEffect, useState} from 'react';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import '../App.css'
import '../static/css/View.css'



const View = props => {
    const [character, setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)

    useEffect (()=>{
        axios.get(`http://localhost:8000/api/characters/${props.id}`)
            .then(response => {
                console.log(response)
                setCharacter(response.data)
                setCharacterLoaded(true)

            }).catch(error => {
                console.log(error)
            })
    },[props.id])


    return (

        <> 
            <Nav />
            {   

                characterLoaded && <Feature char = { character }/>

            }
            <Footer />
        </>
    )
}

export default View;