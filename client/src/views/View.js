import React, {useEffect, useState, useContext} from 'react';
import Feature from '../components/Feature';
import Nav from '../components/Nav';
import axios from 'axios';
import '../App.css'
import '../static/css/View.css'
import Title from '../components/Title';
import FeatureInfo from '../components/FeatureInfo';
import VotesMapper from '../components/VotesMapper';
import Context from '../context/Context'



const View = props => {
    const context = useContext(Context)
    const [character, setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)
    const [rank] = useState(props.rank)
    const [location] = useState('view')
    const [title] = useState("Epic Performance!")
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
        setVotes([signature,...votes])
        context.goto_vote(e,character,votes,signature);
        console.log('here')

    }

    const reset_votes = (e)=> {
        e.preventDefault()
        setVotes([context.signature])
        context.goto_vote(e,character,[],context.signature);
    }



    return (
        <>
        <Nav />
        <div id = 'View' className = 'wrapper'>
            {

                characterLoaded && <Title title = {title} subtitle = {character.charName}/>
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
                    <FeatureInfo character = {character} />
                }
                {
                    characterLoaded && 
                    <VotesMapper resultNum ={resultNum} votes = {votes} />
                }
            </section>
        
        </div>
        </>
    )
}

export default View;