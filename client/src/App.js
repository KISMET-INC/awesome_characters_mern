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

const [signature, setSignature] = useState('Anonymous')
const [reloadedLocal,setReloadedLocal] = useState(0)
const [reloadedBase,setReloadedBase] = useState(0)
const [totalCharacters, setTotalCharacters] = useState(0)

const goto_vote =(e,character,votes) =>{
  e.preventDefault();
  console.log(`votes ${votes}`)
  axios.put(`http://localhost:8000/api/characters/edit/${character._id}`, { votes : [signature,...votes] })
  .then(response => {
      console.log(response)
  }).catch ( error => {
      console.log(error)
  })
}






  return (
    <div className="App">
      <Context.Provider value= {{ totalCharacters, setTotalCharacters,reloadedLocal,setReloadedLocal, reloadedBase, setReloadedBase, signature,setSignature, goto_vote}}>
        <Router>
          <Main path="/" />
          <Add path="/add" />
          <Edit path= '/edit/:id/:rank' />
          <All path= '/search' />
          <View path = '/view/:id/:rank' />
        </Router>
      </Context.Provider>
  
      </div>
  );
}

export default App;
