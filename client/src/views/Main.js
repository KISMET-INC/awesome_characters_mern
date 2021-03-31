import React, { useEffect, useState, useContext} from 'react';
import { Link } from '@reach/router';
import '../App.css';
import FeatureCarousel from '../components/FeatureCarousel';
import Footer from '../components/Footer';
import HonorableCarousel from '../components/HonorableCarousel';
import Nav from '../components/Nav.js';
import '../static/css/Main_Breakpoints.css';
import '../static/css/Main.css';
import axios from 'axios';
import Context from '../context/Context'



const Main = props => {
    const context = useContext(Context)
    const [characterList, setCharacterList] = useState()
    const [listLoaded, setListLoaded] = useState(false)
    const [string, setString] = useState(context.val)
    
    useEffect(()=> {    
        axios.get('http://localhost:8000/api/characters/')
        .then(response=>{
            setCharacterList(response.data.characters.sort((a,b)=> a.votes.length > b.votes.length ? -1 : 1))
            setListLoaded(true)
            console.log('useEffect')
        }).catch(err=>console.log(err))

    },[]);



    return (
        <div>


        <Nav />

        <div id='main_body' className = 'wrapper'>
            <h3 className ='main_title'>★ FEATURED  ★ Top 5</h3>
        
            <div className= 'featured film_strip carousel'>
                {
                    listLoaded && <FeatureCarousel characterList = { characterList }/>
                    
                }
            </div>

            <h3 className ='main_title'> ★ Honorable Mentions ★ <Link to= "/search"><span className= 'link'>Click to see all</span></Link></h3>

            < div className = 'honorable carousel'>
                {
                    listLoaded && <HonorableCarousel characterList = { characterList }/>
                    
                }
            </div>
        </div>
        
        <Footer />

        </div>
    )

}

export default Main;