import { Link } from '@reach/router';
import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import React, {useState} from 'react';





const Honorable_Carousel = props => {

    const [resState] = useState({
            0: {
                items:1,
            },

            321: {
                items:2,
        
            },
        
            631: {
                items: 2,
            },
            768: {
                margin: 0,
            },
            941: {
                items: 3,
            },
            
            1300: {
                items: 3,
            },
            1400: {
                items: 4,
            },


    })



    return(
        <div id = "honorable">

            <OwlCarousel 
            className='owl-theme' 
            loop
            autoplayHoverPause = {true}
            responsiveClass={true}
            responsive = {resState}
            center = {true}
            margin = {50}
            >

                {
                    props.characterList.map((char,i) => 
                        <CharacterCard i = {i} key={i} char={char} />
                    )
                }

            </OwlCarousel>
    
        </div>

    )
}


export default Honorable_Carousel;