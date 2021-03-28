import { Link } from '@reach/router';
import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '../static/css/Featured.css';
import React, {useState} from 'react';





const Honorable = props => {

    const [resState] = useState({
            0: {
                items: 1,
            
            },
            700: {
                items: 2,
            },
            1000: {
                items: 1,
            },

    })



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
                    props.characterList.map((char,i) => 
                        <CharacterCard i = {i} key={i} char={char} />
                    )
                }

            </OwlCarousel>
    
        </div>

    )
}


export default Honorable;