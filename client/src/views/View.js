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
            {

                characterLoaded && <Title title = {title} subtitle = {character.charName}/>
            }
            
            <div id = 'View' className = 'film_strip'>
                {   
                    characterLoaded && <Feature location ={ location } rank = { rank } character = { character }/>
                }
            <div className = 'bottom flex'>
                {
                    characterLoaded && <FeatureInfo character = {character} />
                }
                {
                    characterLoaded && <VotesMapper votes = {character.votes} />
                }
            </div>
                { character.quote}
            </div>

        
        </>
    )
}

export default View;