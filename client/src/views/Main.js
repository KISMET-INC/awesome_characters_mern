import React, { useEffect } from 'react';
import { useState } from 'react'
import '../App.css';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Honorable from '../components/Honorable';
import Nav from '../components/Nav.js';
import '../static/css/Main_Breakpoints.css';
import axios from 'axios';


const Main = props => {
    const [characterList, setCharacterList] = useState([])
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/characters/')
        .then(response=>{
            setCharacterList(response.data.characters)
            console.log((response.data.characters[0].movie === undefined))
        }).catch(err=>console.log(err))

    },[]);



    return (
        <div>

        <Nav />
        <Featured characterList ={characterList}/>
        <Honorable characterList ={characterList} />
        <Footer />
       
        </div>
    )

}

export default Main;