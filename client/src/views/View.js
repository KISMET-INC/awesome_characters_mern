import React, {useEffect, useState, useContext} from 'react';
import Feature from '../components/Feature';
import Nav from '../components/Nav';
import axios from 'axios';
import '../App.css'
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
        

        const update_character = (e,signature,character)=> {
            e.preventDefault()
            if ( !context.votedList.hasOwnProperty(character.charName) ) {
                
                setVotes([context.signature,...character.votes])
                context.goto_vote(e,character,character.votes)
                context.setStartPositionF(rank-1)
            } else {
                alert(`You've already voted for ${character.charName}`)
            }
        }

    const reset_votes = (e)=> {
        e.preventDefault()
        if (context.signature == context.adminName){
            setVotes([context.signature])
            context.goto_vote(e,character,[], context.signature);
        } else {
            alert('Sorry, only admins can reset votes')
        }
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
                    update_character ={update_character} reset_votes={reset_votes} 
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
                <h5 className ='visitDB'>Visit "{character.title}" on The Movie Database...</h5>
            </section>

        
        </div>
        </ScrollAnimation>
        </>
    )
}

export default View;