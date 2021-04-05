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





function App() {

const [signature, setSignature] = useState('Anonymous')
const [reloadedLocal,setReloadedLocal] = useState(0)
const [reloadedBase,setReloadedBase] = useState(0)
const [totalCharacters, setTotalCharacters] = useState(0)
const [votedList, setVotedList] = useState('')
const [startPosition,setStartPosition] = useState(0)
const [startPositionF,setStartPositionF] = useState(0)

const goto_vote =(e,character,votes) =>{
  e.preventDefault();
  console.log(`votes ${votes}`)
  axios.put(`http://localhost:8000/api/characters/edit/${character._id}`, { votes : [signature,...votes] })
  .then(response => {
      console.log(response)
      const name = character.charName
      const id = character._id
      const temp = {...votedList}
      temp[name] = id

      setVotedList(temp)
      
    }).catch ( error => {
      console.log(error)
    })
}


// const update_character = (e,signature,character)=> {
//   e.preventDefault()
//   if(!votedOn.hasOwnProperty(character.charName)){
//       const temp = {...votedOn}
//       const name = character.charName
//       const id = character._id
//       temp[name] = id;

//       //setVotedOnList(temp)
//       //setVotedOn(true)
//       goto_vote(e,character,character.votes,signature);
//       return true;
//   } else {
//       alert(`You already voted for ${character.charName}`)
//       return false;
//   }

// }






  return (
    <div className="App">
      <Context.Provider value= {{startPosition, setStartPosition, startPositionF, setStartPositionF, votedList, totalCharacters, setTotalCharacters,reloadedLocal,setReloadedLocal, reloadedBase, setReloadedBase, signature,setSignature, goto_vote}}>
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
