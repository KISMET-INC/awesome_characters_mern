import { Link } from '@reach/router';
import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import Slider from 'infinite-react-carousel';




const Honorable = props => {

    const [setWinSize, getWinSize] = useState ({
        width:window.innerWidth
    });

    console.log("hi")

    const settings = {
        dots: true,
        slidesToShow: 1,
        arrows:false,
    };

    return(
        <div id = "honorable_wrapper">
            <h3> ★ Honorable Mentions ★ <Link to= "/search"><span className= 'link'>Click to see all</span></Link></h3>
    

                <Slider {...settings}>
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                </Slider>
                </div>


    )
}

export default Honorable;