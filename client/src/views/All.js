import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import '../App.css';
import '../static/css/All.css'
import { navigate } from '@reach/router';
const All = props => {
    const [characterList, setCharacterList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState([])


    useEffect (()=>{
        axios.get('http://localhost:8000/api/characters')
            .then(response => {
                setCharacterList(response.data.characters)
                setSearchList(response.data.characters)
                setListLoaded(true)

            }).catch (error => {
                console.log(error)
            })
    },[])

    const query = (e,data) => {
        e.preventDefault();
    }


    return (

        <>

        <Nav / >
            <p>Search by: name, year, movie title</p>
            <input name= 'search' value = {search}  type = 'text' onChange = { (e) => { setSearch(e.target.value)}}></input>
           
            <div id =  'search_results' className = 'flex'>
                
            {
                listLoaded && search === "" ? characterList.map((char, i) =>
            
                    <CharacterCard char = {char} key = {i} />
                ) : <></>
            }

            {
                listLoaded && search !== "" ? characterList.filter(c => c.charName.includes(search) || c.year === search || c.title === search).map((char, i) =>
            
                    <CharacterCard char = {char} key = {i} />
                ) : <></>
            }


            </div>
        
        <Footer />

        </>    
    )

}

export default All;