import React, { useState , useRef}from 'react';
import '../static/css/App.css';
import Feature from './Feature';
import OwlCarousel from 'react-owl-carousel';
import ScrollAnimation from 'react-animate-on-scroll'; 
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


const Featured_Carousel = ({characterList}) => {
    const [location] = useState('carousel')
    const [resultNum] = useState(6)
    const carouselIndex = useRef(0)

    const info =(e) => {
        carouselIndex.current = e.item.index
    }


    return(
        <div id= "Feature_Carousel" >
        <ScrollAnimation 
        animatePreScroll ={true}
        animateOnce = {true}
        initiallyVisible ={false}
        animateIn="fadeIn">

            
            <OwlCarousel 
            className='owl-theme' 
            margin={100} 
            items= {1} 
            autoplay = {true} 
            autoplaySpeed = {1500}
            autoplayHoverPause = {true}
            startPosition ={carouselIndex.current}
            dots = {false}
            center = {true}
            onChanged = {info}

            >

            {
                characterList.map((character,i)=>
                    i < 5 && <Feature location ={location} resultNum = {resultNum} character ={character} key= {i} rank = {i+1} update_character= {''} reset_votes ={''} />
                )  
            }


            </OwlCarousel>
            </ScrollAnimation>

        </div>
        
    
    )

}

export default Featured_Carousel;