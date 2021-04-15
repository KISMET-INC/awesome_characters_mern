import './static/css/App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Context from './context/Context'
import Add from './views/Add';
import Edit from './views/Edit';
import All from './views/All';
import View from './views/View';
import axios from 'axios'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



function App() {
const [signature, setSignature] = useState('Anonymous')
const [totalCharacters, setTotalCharacters] = useState(0)
const [votedList, setVotedList] = useState('')
const [adminName] = useState('Kristen')



const goto_vote =(e,character,votes) =>{
  e.preventDefault();
  axios.put(`http://localhost:8000/api/characters/edit/${character._id}`, { votes : [signature,...votes] })
  .then(response => {})
  .catch ( error => 
  {
      console.log(error)
  })

  if (votes.length >= 1){
    const name = character.charName
    const id = character._id
    const temp = {...votedList}
    temp[name] = id
    setVotedList(temp)
  }
}


const update_character = (e,character,setVotes)=> {
  e.preventDefault()
  if ( !votedList.hasOwnProperty(character.charName) ) {
          setVotes([signature,...character.votes])
          goto_vote(e,character,character.votes)
  } else {
      alert(`You've already voted for ${character.charName}`)
  }
}


const reset_votes = (e,character,setVotes)=> {
  e.preventDefault()
  if (signature === adminName){
      setVotes([signature])
      goto_vote(e,character,[], signature);
  } else {
      alert('Sorry, only admins can reset votes')
  }
}



  return (
    <div className="App">
      <Context.Provider value= {{adminName, votedList, totalCharacters, setTotalCharacters, signature,setSignature, update_character, reset_votes}}>
        <Router>
          <Main path="/" />
          <Add path="/add" />
          <Edit path= '/edit/:id/:rank/' />
          <All path= '/search' />
          <View path = '/view/:id/:rank/' />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
