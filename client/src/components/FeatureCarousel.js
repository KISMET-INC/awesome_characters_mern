import React from 'react';
import '../App.css';
import Feature from './Feature';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
//import 'owl.carousel/dist/assets/owl.theme.default.min.css';




const Featured_Carousel = props => {

    return(
        <div id= "feature_carousel" >
            
            <OwlCarousel 
            className='owl-theme' 
            loop margin={1} 
            items= {1} 
            autoplay = {true} 
            autoplaySpeed = {1500}
            autoplayHoverPause = {true}
            dots = {false}
            startPosition= {0}
            >

            {
                props.characterList.map((character,i)=>
                    <Feature key= {i} rank = {i+1} character = {character} />
                )  
            }

            </OwlCarousel>
    

        </div>
        
    
    )

}

export default Featured_Carousel;