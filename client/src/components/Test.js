import React, {useState, useEffect} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import '../App.css';


const Test = props => {

    const [characterList, setCharacterList] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8000/api/characters/')
        .then(response=>{
            setCharacterList(response.data.characters)
            console.log(characterList)
        }).catch(err=>console.log(err))

    },[]);


    return (
        <div class = 'new'>
            {
            characterList.map((char,i)=>
                        <h1>{char.actor}</h1>
                )
            }
        </div>
    )
}

export default Test;