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
    const [resultNum] = useState(12)


    useEffect (()=>{
        axios.get(`http://localhost:8000/api/characters/${props.id}`)
            .then(response => {
                setCharacter(response.data)
                setCharacterLoaded(true)
                

            }).catch(error => {
                console.log(error)
            })
    },[props.id])



    return (
        <>
        <Nav />
        <div id = 'View' className = 'wrapper'>
            {

                characterLoaded && <Title title = {title} subtitle = {character.charName}/>
            }
            
            <div  className = 'film_strip'>
                {   
                    characterLoaded && <Feature resultNum= {resultNum} location ={ location } rank = { rank } character = { character }/>
                }
                
            </div>

            <section className = 'bottom flex'>
                {
                    characterLoaded && <FeatureInfo character = {character} />
                }
                {
                    characterLoaded && <VotesMapper resultNum ={resultNum} votes = {character.votes} />
                }
            </section>
        
        </div>
        </>
    )
}

export default View;