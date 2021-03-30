import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Context from './context/Context'
import Add from './views/Add';
import Edit from './views/Edit';
import All from './views/All';
import View from './views/View';
import axios from 'axios'





function App() {

const [val, setVal] = useState('Anonymous')
const [character, setCharacter] = useState({})
const [characterList] = useState()

const goto_vote =(e,character,votes,string) =>{
  e.preventDefault();
  console.log(`votes: ${votes}`)
  console.log(`votes: ${votes.length}`)
  axios.put(`http://localhost:8000/api/characters/edit/${character._id}`, { votes : [...votes,string] })
  .then(response => {
      console.log(response)
  }).catch ( error => {
      console.log(error)
  })
  
}





  return (
    <div className="App">
      <Context.Provider value= {{ val,setVal, goto_vote, character, setCharacter, characterList}}>
        <Router>
          <Main path="/" />
          <Add path="/add" />
          <Edit path= '/edit/:id/' />
          <All path= '/search' />
          <View path = '/view/:id' />
        </Router>
      </Context.Provider>
  
      </div>
  );
}

export default App;
