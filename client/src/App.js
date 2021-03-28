import './App.css';
import React, { useState } from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Context from './context/Context.js'
import Add from './views/Add';
import Edit from './views/Edit';


// TRICKLE DOWN STATE


function App() {
  const [updateView, setUpdateView] = useState(false)
 

  return (
    <div className="App">
      <Context.Provider value= {{updateView, setUpdateView}}>
        <Router>
          <Main path="/" />
          <Add path="/add" />
          <Edit path= '/edit/:id' />
        </Router>
      </Context.Provider>
      </div>
  );
}

export default App;
