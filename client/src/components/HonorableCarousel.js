import '../static/css/App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import React, {useState, useRef} from 'react';







const Honorable_Carousel = props => { 
const carouselIndex = useRef(0)


    const [items] = useState({

            0: {
                items: 1,
              
            },

            500 : {
                items: 2,
                
            },
            600: {
                items: 2,
            
            },
            700 : {
                items: 3,
        
                
            },
            1000 : {
                items: 4,
            },
            1200 : {
                items: 4,
    
            },
        

    })


    const info =(e) => {
        carouselIndex.current = e.item.index
    }


    return(
    
        <div id = "honorable">
            <OwlCarousel 
            className='owl-theme' 
            responsiveClass={true}
            touchDrag={true}
            startPosition={carouselIndex.current}
            responsive = {items}
            dots ={true}
            onChanged ={info}
            >

                {
                    props.characterList.map((char,i) => 
                    i > 4 && i <16 && <CharacterCard  i = {i} key={i} char={char} />
                    )
                }

            </OwlCarousel>
    
        </div>
    

    )
}


export default Honorable_Carousel;