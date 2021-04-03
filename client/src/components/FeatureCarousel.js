import React, { useState }from 'react';
import '../App.css';
import Feature from './Feature';
import OwlCarousel from 'react-owl-carousel';
import e from 'cors';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
//import 'owl.carousel/dist/assets/owl.theme.default.min.css';




const Featured_Carousel = ({characterList}) => {
    const [location] = useState('carousel')
    const [resultNum] = useState(6)

    


    return(
        <div id= "feature_carousel" >


            
            <OwlCarousel 
            className='owl-theme' 
            margin={50} 
            items= {1} 
            autoplay = {true} 
            autoplaySpeed = {1500}
            autoplayHoverPause = {true}
            dots = {false}
            center = {true}
            loop

            >

            {
                characterList.map((character,i)=>
                    <Feature location ={location} resultNum = {resultNum} character ={character} key= {i} rank = {i+1} update_character= {''} reset_votes ={''} />
                )  
            }

            </OwlCarousel>
    

        </div>
        
    
    )

}

export default Featured_Carousel;