import React, {useEffect, useState} from 'react';
import Feature from '../components/Feature';
import Nav from '../components/Nav';
import axios from 'axios';
import '../App.css'
import '../static/css/View.css'



const View = props => {
    const [character, setCharacter] = useState({})
    const [characterLoaded, setCharacterLoaded] = useState(false)
    const [rank] = useState(props.rank)
    const [location] = useState('view')


    useEffect (()=>{
        axios.get(`http://localhost:8000/api/characters/${props.id}`)
            .then(response => {
                setCharacter(response.data)
                setCharacterLoaded(true)

            }).catch(error => {
                console.log(error)
            })
    },[props.id])


    // const resetVotes =() =>{
    //     axios.put(`http://localhost:8000/api/characters/edit/${props.id}`, { votes : [context.val]})
    //     .then(response => {
    //         setCharacter({...character, votes: [context.val]})
    //         setVotes([context.val])
    //         console.log(votes)
    //     }).catch ( error => {
    //         console.log(error)
    //     })
    // }


    return (

        <>
        <Nav />
            <h2>Epic Performance!</h2>
            <p>Tyler</p>
            
            <div id = 'view_wrapper' className = 'film_strip'>
                {   
                    characterLoaded && <Feature location ={ location } rank = { rank } character = { character }/>
                }

                <div className = 'view_info'>

                    <section className='left flex'>
                        <div>
                            <h3>Movie: </h3>
                            <p>{character.title}</p>
                            <p>{character.year} </p>
                        </div>

                        <div>
                            <h3>Actor: </h3>
                            <p>{character.actor}</p>
                        </div>

                    </section>

                    <div className='quote'>
                        <h3 >Quote: </h3>
                        <p>{character.quote}</p>
                    </div>

                    <div className ='voters'>
                    <h3 >Voters: </h3>
                    <ul>
                    {
                        characterLoaded && character.votes.map((voter, i)=>
                        <li> {voter} </li>
                        )
                    }
                    </ul>
                    

                    </div>


                </div>
            </div>
            
        
        </>
    )
}

export default View;