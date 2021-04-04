import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import React, {useState} from 'react';





const Honorable_Carousel = props => {

    const [resState] = useState({
            // 0: {
            //     items:1,
            // },

            // 321: {
            //     items:2,

        
            // },
        
            // 631: {
            //     items: 2,
            // },
            // 768: {
            //     margin: 0,
            // },
            // 941: {
            //     items: 3,
            // },
            
            0: {
                items: 1,
                margin:-100,
            },

            405 : {
                items: 2,
                margin: 50,
            },
            600: {
                items: 3,
                margin: 70,
               
            },
            771 : {
                items: 4,
                margin: 150,
            },

            1200 : {
                items: 5,
                margin: 150,
            },
        

    })



    return(
        <div id = "honorable">

            <OwlCarousel 
            className='owl-theme' 
            loop
            autoplayHoverPause = {true}
            responsiveClass={true}
            items ={5}
            margin={50}
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


export default Honorable_Carousel;