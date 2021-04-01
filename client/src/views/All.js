import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import Nav from '../components/Nav';
import axios from 'axios';
import '../App.css';
import '../static/css/All.css'
import ScrollAnimation from 'react-animate-on-scroll';

const All = props => {
    const [characterList, setCharacterList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    const [search, setSearch] = useState("")
    const [rankTable, setRankTable] = useState({})



    useEffect (()=>{
        console.log('useEffect')
        setListLoaded(false);
        axios.get('http://localhost:8000/api/characters')
            .then(response => {
                const ranks = {}
                const sorted_list =[]

                response.data.characters.sort((a,b)=> a.votes.length > b.votes.length ? -1 : 1).map((char,i)=> {
                    ranks[char.charName] = i+1
                    sorted_list[i] = char
                })

                setRankTable(ranks)
                setCharacterList(sorted_list)
                setListLoaded(true)
                console.log(response)

            }).catch (error => {
                console.log(error)
            })
    },[])





    return (

        <>
        <Nav />
        
            <div className='search_body'>
            <div id =  'all_search' className = 'flex'>

                <div className = 'search_grp flex'>
                    <p>Search by: name, year, movie title</p>
                    <input value = {search}  type = 'text' onChange = {(e)=> {setSearch(e.target.value)}}></input>
                </div>

                
                <section className = 'results flex'>
                    {
                        listLoaded && search!== "" && characterList.filter(c => c.charName.toLowerCase().includes(search.toLowerCase()) || c.year === search || c.title === search).map((char,i)=>

                        <ScrollAnimation animateIn="fadeIn">
                            <CharacterCard i = {rankTable[char.charName]}  char = {char} key = {i} />
                        </ScrollAnimation>
    
                            
                        )   
                    }

                    {
                        listLoaded && search === "" && characterList.map((char,index)=>

                        <ScrollAnimation animateIn="fadeIn">
                            <CharacterCard i={rankTable[char.charName]} char = {char} key = {index} />
                        </ScrollAnimation>
                        )   
                    }
                </section>

                

            </div>
        </div>
    

        </>    
    )

}

export default All;