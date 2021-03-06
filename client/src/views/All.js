import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import Nav from '../components/Nav';
import axios from 'axios';
import '../static/css/App.css';
import '../static/css/All.css'
import ScrollAnimation from 'react-animate-on-scroll';


const All = props => {  
    const [characterList, setCharacterList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    const [search, setSearch] = useState("")
    const [rankTable, setRankTable] = useState({})




    useEffect (()=>{
        setListLoaded(false);
        axios.get('http://localhost:8000/api/characters')
            .then(response => {
                const ranks = {}
                const sorted_list =[]

                response.data.characters.sort((a,b)=> a.votes.length > b.votes.length ? -1 : 1).forEach((char,i)=> {
                    ranks[char.charName] = i
                    sorted_list[i] = char
                })

                setCharacterList(sorted_list)
                setRankTable(ranks)
                setListLoaded(true)

            }).catch (error => {
                console.log(error)
            })
    },[search])






    return (

        <>
        <Nav />
        
            <div id =  'Search' className = 'wrapper flex'>

                <div className = 'search_grp flex'>
                    <p>Search by : charcter name, movie title, or year released</p>
                    <input value = {search}  type = 'text' onChange = {(e)=> {setSearch(e.target.value)}}></input>
                </div>

                
                <section className = 'results flex'>
                    {
                        listLoaded && search!== "" && characterList.filter(c => c.charName.toLowerCase().includes(search.toLowerCase()) ||  c.title.toLowerCase().includes(search.toLowerCase()) || c.year.toString().includes(search)).map((char,i)=>

                        <ScrollAnimation key = {i} 
                        animatePreScroll ={false}
                        initiallyVisible ={true}
                        offset={1}
                        animateIn="fadeIn">
                            <CharacterCard i = {rankTable[char.charName]}  char = {char} key = {i} />
                        </ScrollAnimation>
    
                            
                        )   
                    }

                    {
                        listLoaded && search === "" && characterList.map((char,i)=>
                        
                        <ScrollAnimation  key={i}
                        animatePreScroll ={true}
                        animateOnce={true}
                        offset = {1}
                        animateIn="slideInLeft"
                        animateOut= ''>
                            <CharacterCard i={rankTable[char.charName]} char = {char} key = {i} />
                        </ScrollAnimation>
                        )   
                    }
                </section>

                

            </div>

        </>    
    )

}

export default All;