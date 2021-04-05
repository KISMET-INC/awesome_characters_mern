import '../App.css';
import '../static/css/Honorable.css'
import CharacterCard from './CharacterCard';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import React, {useState, useContext, useEffect, useRef} from 'react';
import Context from '../context/Context';






const Honorable_Carousel = props => { 
const context = useContext(Context)
const carouselIndex = useRef(0)


    const [items] = useState({

            0: {
                items: 1,
                margin:-100,
            },

            405 : {
                items: 2,
                margin: 50,
            },
            600: {
                items: 3,
                margin: 70,
            },
            771 : {
                items: 4,
                margin: 150,
            },

            1200 : {
                items: 4,
                margin: 10,
            },
        

    })

    useEffect (()=>{
        console.log('ue')
    },[])

    const info =(e) => {
        console.log(e.item.index)
        carouselIndex.current = e.item.index
        
        
    }


    return(
    
        <div id = "honorable">
            <p>{carouselIndex.current}</p>
            <OwlCarousel 
            className='owl-theme' 
            responsiveClass={true}
            touchDrag={true}
            startPosition={carouselIndex.current}
            // loop
            responsive = {items}
            dots ={false}
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