import React, {useEffect, useState, useContext} from 'react';
import Feature from '../components/Feature';
import Nav from '../components/Nav';
import axios from 'axios';
import '../static/css/App.css'
import '../static/css/View.css'
import Title from '../components/Title';
import VotesMapper from '../components/VotesMapper';
import Context from '../context/Context'
import BasicInfo from '../components/BasicInfo';
import ScrollAnimation from 'react-animate-on-scroll';  





const View = props => {
    const context = useContext(Context)
    const [character, setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)
    const [rank] = useState(props.rank)
    const [location] = useState('view')
    const [title] = useState("Fantastic Performance!")
    const [resultNum] = useState(8)
    const [votes, setVotes] = useState('')
    
    

    
    
    useEffect (()=>{
        axios.get(`http://localhost:8000/api/characters/${props.id}`)
        .then(response => {
                setCharacter(response.data)
                setVotes(response.data.votes)
                setCharacterLoaded(true)
            }).catch(error => {
                console.log(error)
            })
        },[props.id])
        

        const root_update_character = (e)=> {
            context.update_character(e,character,setVotes)
        }

        const root_reset_votes = (e)=> {
            context.resetvotes(e,character,setVotes)
        }






    return (
        <>
        <Nav />
        <ScrollAnimation 
        animatePreScroll ={true}
        animateOnce = {true}
        duration={2}
        initiallyVisible ={false}
        animateIn="fadeIn">
        <div id = 'View' className = 'wrapper'>
            {

                characterLoaded && <Title title = {title} subtitle = {character.actor}/>
            }
            
            <div  className = 'film_strip'>
                {   
                    characterLoaded && 
                    <Feature 
                    resultNum = {resultNum} 
                    character={character} 
                    location ={location} 
                    rank= {rank} 
                    root_update_character ={root_update_character} 
                    root_reset_votes={root_reset_votes} 
                    />
                }
                
            </div>

            <section className = 'bottom flex'>
                {
                    characterLoaded && 
                    <BasicInfo character ={character}/>
                }
                {
                    characterLoaded && 
                    <VotesMapper resultNum ={resultNum} votes = {votes} />
                }
                {/* <h5 className ='visitDB'>Visit "{character.title}" on The Movie Database...</h5> */}
            </section>

        
        </div>
        </ScrollAnimation>
        </>
    )
}

export default View;