import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import React, {useState, useContext} from 'react';
import Context from '../context/Context';






const Honorable_Carousel = props => { 
const context = useContext(Context)

    const [items] = useState({

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
                margin: 10,
            },
        

    })



    return(
    
        <div id = "honorable">

            <OwlCarousel 
            className='owl-theme' 
            responsiveClass={true}
            items ={4}
            margin={50}
            startPosition={context.startPosition}
            // loop
            responsive = {items}
            dots ={false}
            >

                {
                    props.characterList.map((char,i) => 
                    i > 4 && i <16 && <CharacterCard i = {i} key={i} char={char} />
                    )
                }

            </OwlCarousel>
    
        </div>
    

    )
}


export default Honorable_Carousel;