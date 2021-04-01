import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import QueueAnim from 'rc-queue-anim';
import Featured_Carousel from './components/FeatureCarousel';
import Footer from './components/Footer';

ReactDOM.render(
<>
  <QueueAnim >
    <div key = '1' style ={{minHeight: '800px'}}>
    <App key = '2'/>
    </div>
    <Footer key = '3'/>

  </QueueAnim>
    </>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
