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



// TRICKLE DOWN STATE




function App() {

const [val, setVal] = useState('Anonymous')

const goto_vote =(e,charcter) =>{
  e.preventDefault();
  axios.put(`http://localhost:8000/api/characters/edit/${charcter._id}`, { votes : [...charcter.votes, "Khalil"]})
  .then(response => {
      console.log(response)
  }).catch ( error => {
      console.log(error)
  })
  
}

const [character, setCharacter] = useState({})



  return (
    <div className="App">
      <Context.Provider value= {{val,setVal, goto_vote, character, setCharacter}}>
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
