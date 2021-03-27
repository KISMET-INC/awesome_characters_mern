import { Link } from '@reach/router';
import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '../static/css/Featured.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';





const Honorable = props => {
    const [characterList, setCharacterList] = useState([])
    const [resState] = useState({
       
            0: {
                items: 2,
            },
            450: {
                items: 2,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },

    })

    useEffect(()=> {
        axios.get('http://localhost:8000/api/characters/')
        .then(response=>{
            setCharacterList(response.data.characters)
            console.log((response.data.characters[0].movie === undefined))
        }).catch(err=>console.log(err))

    },[]);


    return(
        <div id = "honorable_wrapper">
            <h3> ★ Honorable Mentions ★ <Link to= "/search"><span className= 'link'>Click to see all</span></Link></h3>

            <OwlCarousel 
            className='owl-theme' 
            loop
            autoplayHoverPause = {true}
            responsiveClass={true}
            responsive = {resState}
            >

    
                {
                    characterList.map((char,i) => 
                        <CharacterCard i = {i} key={i} char={char} />
                    )
                }
            </OwlCarousel>
    
        </div>


    )
}


export default Honorable;