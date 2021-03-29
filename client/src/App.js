import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Context from './context/Context'
import Add from './views/Add';
import Edit from './views/Edit';
import All from './views/All';
import View from './views/View';


// TRICKLE DOWN STATE


function App() {
 const [val] = useState('Kristen')

  return (
    <div className="App">
      <Context.Provider value= {val}>
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
