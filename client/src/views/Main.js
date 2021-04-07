import React, { useEffect, useState, useContext} from 'react';
import { Link } from '@reach/router';
import '../App.css';
import FeatureCarousel from '../components/FeatureCarousel';
import HonorableCarousel from '../components/HonorableCarousel';
import '../static/css/Main.css';
import axios from 'axios';
import Nav from '../components/Nav.js';
import Context from '../context/Context'




const Main = props => {
    const [characterList, setCharacterList] = useState()
    const [listLoaded, setListLoaded] = useState(false)
    const context = useContext(Context)
    const [voteList, setVoteList] = useState({})
    
    
    useEffect(()=> {  
    
        axios.get('http://localhost:8000/api/characters/')
        .then(response=>{
            setCharacterList(response.data.characters.sort((a,b)=> a.votes.length > b.votes.length ? -1 : 1))
            context.setTotalCharacters(response.data.characters.length)
            setListLoaded(true)
        }).catch(err=>console.log(err))

    },[context]);



    return (
        
        <div id ='Main'>

        <Nav />
        
            <div id='main_body' className = 'wrapper'>
        
            <h3 key ='2' className ='main_title'>★ FEATURED  ★ Top 5</h3>
            <div key = '3' className= 'featured film_strip carousel'>
                {
                    listLoaded && <FeatureCarousel voteList ={voteList} setVoteList ={setVoteList} characterList = { characterList }/>
                    
                }
            </div>

            
            <h3 key='4' className ='main_title'> ★ Honorable Mentions ★</h3> <Link to= "/search"><h3 className= 'link'>Click to see all</h3></Link>
            < div key= '5' className = 'honorable carousel'>
                {
                    listLoaded && <HonorableCarousel characterList = { characterList }/>
                    
                }
            </div>
        </div>

        </div>

    )

}

export default Main;