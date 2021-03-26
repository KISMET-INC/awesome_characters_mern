import React from 'react';
import Slider from 'infinite-react-carousel';

import '../App.css';
import '../static/css/Featured.css';
import VoteBtn from './buttons/VoteBtn';
import EditBtn from './buttons/EditBtn';
import Feature from './Feature';


const Featured = props => {

    const settings =  {
        //autoplay: true,
        arrows: false,
        dots: true,
        //fwheel: true,
        gutter: 4,
        slidesToShow: 1,
        duration: 700,
        autoplaySpeed: 8000,

    };
    return(
        <div id= "feature_wrapper">
            <h2 className= "feature_title">★ FEATURED  ★ Top 5</h2>
            
            {/*  */}
    
            {/* ?<Slider { ...settings }> */}
            {
                props.characterList.map((char,i)=>
                        <Feature key = {i} char= {char} />
                )
            
            }
                
               
            {/* </Slider> */}

        </div>
        
    
    )

}

export default Featured;