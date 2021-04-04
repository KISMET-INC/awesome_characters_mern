import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QueueAnim from 'rc-queue-anim';
import Footer from './components/Footer';
import ScrollAnimation from 'react-animate-on-scroll';

ReactDOM.render(
  <>
  
      <div key = '1' style ={{minHeight: '700px'}}>
        <App />
      </div>


      <div key = '2'>
        <Footer />
      </div>

    
  </>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
