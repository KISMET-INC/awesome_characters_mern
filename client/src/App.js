import './App.css';
import React, { useState, useEffect } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Context from './context/Context'
import Add from './views/Add';
import Edit from './views/Edit';
import All from './views/All';
import View from './views/View';
import axios from 'axios'



// TRICKLE DOWN STATE




function App() {

const [val, setVal] = useState('Anonymous')
const [character, setCharacter] = useState({})
const [characterList, setCharacterList] = useState()
const [votedID, setVotedID] = useState()

const goto_vote =(e,character) =>{
  e.preventDefault();
  axios.put(`http://localhost:8000/api/characters/edit/${character._id}`, { votes : [...character.votes, "Khalil"]})
  .then(response => {
      console.log(response)
  }).catch ( error => {
      console.log(error)
  })
  
}

  useEffect(()=> {    
    console.log("getCharlist")
    axios.get('http://localhost:8000/api/characters/')
    .then(response=>{
        setCharacterList(response.data.characters.sort((a, b) => a.votes.length > b.votes.length ? 1 : -1))

    }).catch(err=>console.log(err))

  },[votedID]);





  return (
    <div className="App">
      <Context.Provider value= {{ setVotedID, val,setVal, goto_vote, character, setCharacter, characterList}}>
        <Router>
          <Main path="/" />
          <Add path="/add" />
          <Edit path= '/edit/:id' />
          <All path= '/search' />
          <View path = '/view/:id' />
        </Router>
      </Context.Provider>
  
      </div>
  );
}

export default App;
