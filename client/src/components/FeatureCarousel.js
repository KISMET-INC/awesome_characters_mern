import React, { useState }from 'react';
import '../App.css';
import Feature from './Feature';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
import ScrollAnimation from 'react-animate-on-scroll';  



const Featured_Carousel = ({characterList}) => {
    const [location] = useState('carousel')
    const [resultNum] = useState(6)

    


    return(
        <div id= "feature_carousel" >
        <ScrollAnimation 
        animatePreScroll ={true}
        animateOnce = {true}
        duration={1}
        animateIn="fadeIn">

            
            <OwlCarousel 
            className='owl-theme' 
            margin={100} 
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
            </ScrollAnimation>
        </div>

        
    
    )

}

export default Featured_Carousel;