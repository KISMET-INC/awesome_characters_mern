import { Link } from '@reach/router';
import React from 'react';
import '../App.css';
import '../static/css/Honorable.css'
import Character_Card from './Character_Card';
import Slider from 'infinite-react-carousel';




const Honorable = props => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        arrows:false,
    };

    return(
        <div id = "honorable_wrapper">
            <h3> ★ Honorable Mentions ★ <Link to= "/search"><span class= 'link'>Click to see all</span></Link></h3>
    

                <Slider {...settings}>
                    <Character_Card />
                    <Character_Card />
                    <Character_Card />
                    <Character_Card />
                    <Character_Card />
                    <Character_Card />
                    <Character_Card />
                    <Character_Card />
                    <Character_Card />
                </Slider>
                </div>


    )
}

export default Honorable;