import React, {useEffect, useContext, useState} from 'react';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import Context from '../context/Context.js'
import '../App.css'
import '../static/css/View.css'
import EditBtn from '../components/buttons/EditBtn';



const View = props => {
    const context = useContext(Context)
    const [character, setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)
    const [votes, setVotes] = useState([])
    const [rank] = useState(props.rank)


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


    const resetVotes =() =>{
        axios.put(`http://localhost:8000/api/characters/edit/${props.id}`, { votes : [context.val]})
        .then(response => {
            setCharacter({...character, votes: [context.val]})
            setVotes([context.val])
            console.log(votes)
        }).catch ( error => {
            console.log(error)
        })
    }


    return (

        <> 
    
            <Nav />
            
            <div id = 'view_wrapper' className = 'film_strip'>
                {   
                    characterLoaded && <Feature rank = { rank } character = { character }/>
                }

                <div className = 'view_info'>
                    <p>{character.title}</p>
                    
                    <h3>Quote: </h3>
                    <p>{character.quote}</p>

                    <h3>Votes: {votes.length} </h3>
                    <EditBtn character_id= {character._id} />
                    <button onClick = {resetVotes}>Reset Votes</button>
                </div>
            </div>
            
            <Footer />
        
        </>
    )
}

export default View;