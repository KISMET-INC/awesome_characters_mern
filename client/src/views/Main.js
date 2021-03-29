import React, { useContext, useEffect } from 'react';
import { useState } from 'react'
import '../App.css';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Honorable from '../components/Honorable';
import Nav from '../components/Nav.js';
import '../static/css/Main_Breakpoints.css';
import axios from 'axios';
import Context from '../context/Context';


const Main = props => {
    const context = useContext(Context)
    const [characterList, setCharacterList] = useState()
    const [listLoaded, setListLoaded] = useState(false)
    
    useEffect(()=> {    
        axios.get('http://localhost:8000/api/characters/')
        .then(response=>{
            setCharacterList(response.data.characters)
            setListLoaded(true)
        }).catch(err=>console.log(err))

    },[]);



    return (
        <div>

        <Nav />
        
        {
            listLoaded && <Featured characterList = { characterList }/>
            
        }

{
            listLoaded && <Honorable characterList = { characterList }/>
            
        }
        
        <Footer />
       
        </div>
    )

}

export default Main;