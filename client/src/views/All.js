import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import '../App.css';
import '../static/css/All.css'

const All = props => {
    const [characterList, setCharacterList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    const [search, setSearch] = useState("")



    useEffect (()=>{
        axios.get('http://localhost:8000/api/characters')
            .then(response => {
                setCharacterList(response.data.characters)
                setListLoaded(true)
                console.log(response)

            }).catch (error => {
                console.log(error)
            })
    },[])





    return (

        <>

        <Nav / >
        

            <div id =  'all_search' className = 'flex'>

                <div className = 'search_grp flex'>
                    <p>Search by: name, year, movie title</p>
                    <input value = {search}  type = 'text' onChange = {(e)=> {setSearch(e.target.value)}}></input>
                </div>

                <section className = 'results flex'>   
                    {
                        listLoaded && search!== "" && characterList.filter(c => c.charName === search || c.year === search || c.title === search).map((char,i)=>

                            <CharacterCard char = {char} key= {i} />
                            
                        )   
                    }

                    {
                        listLoaded && search === "" && characterList.map((char,i)=>
                        
                            <CharacterCard char = {char} key= {i} />
                            
                        )   
                    }
                </section>
        
            </div>
        
        <Footer />

        </>    
    )

}

export default All;