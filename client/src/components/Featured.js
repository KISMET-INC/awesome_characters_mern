import React, {useEffect, useState} from 'react';
import '../App.css';
import Feature from './Feature';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '../static/css/Featured.css';



const Featured = props => {

    return(
        <div id= "feature_wrapper">
            <h2 className= "feature_title">★ FEATURED  ★ Top 5</h2>

            <OwlCarousel 
            className='owl-theme' 
            loop margin={1} 
            items= {1} 
            autoplay = {true} 
            autoplaySpeed = {1500}
            fallbackEasing = {100000}
            autoplayHoverPause = {true}
            dots = {false}
            >

            {
                props.characterList.map((char,i)=>
                <div key = {i} className='item'>
                    <Feature i = {i} char = {char} />
                </div>
                
                )  
            }

            </OwlCarousel>
    

        </div>
        
    
    )

}

export default Featured;