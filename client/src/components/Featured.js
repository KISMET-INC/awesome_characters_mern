import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import '../static/css/Featured.css';
import Feature from './Feature';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



const Featured = props => {
    const [characterList, setCharacterList] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/api/characters/')
        .then(response=>{
            setCharacterList(response.data.characters)
            console.log((response.data.characters[0].movie === undefined))
        }).catch(err=>console.log(err))

    },[]);


    return(
        <div id= "feature_wrapper">
            <h2 className= "feature_title">★ FEATURED  ★ Top 5</h2>

            <OwlCarousel className='owl-theme' loop margin={10} nav>

            {
                
                characterList.map((char,i)=>
                <div className='item'>
                    <Feature key = {i} char = {char} />
                </div>
                )
            
            }

            </OwlCarousel>
                
    

        </div>
        
    
    )

}

export default Featured;