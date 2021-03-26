import { Link } from '@reach/router';
import React, { useCallback } from 'react';
import { useEffect,useState } from 'react';
import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import Slider from 'infinite-react-carousel';




const Honorable = props => {

    // const [numSlides, setNumSlides] = useState(2)
    // const [size, setSize]  = useState(true)
    // const [windowSize, setWindowSize] =useState(window.innerWidth)

    // const changeNumSlides = useCallback(() => {
    //     if(windowSize > 500)
    //         setNumSlides(1)
    // },[]);


    // useEffect(()=> {
    //     window.addEventListener("resize", ()=>{
    //         setWindowSize(window.innerWidth)
    //         changeNumSlides()
    //         console.log('hi')
    //     })
    

    // },[])
    
    
    const settings = {
        dots: true,
        //slidesToShow: numSlides,
        arrows:false,
    };


    return(
        <div id = "honorable_wrapper">
            <h3> ★ Honorable Mentions ★ <Link to= "/search"><span className= 'link'>Click to see all</span></Link></h3>
    
                {
                    props.characterList.map((char,i) => 
                        <CharacterCard key={i} char={char} />
                    )
                }
                
    
                </div>


    )
}


export default Honorable;