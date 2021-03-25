import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';

const Main = props => {
    const context = useContext(Wrapper)

    return (
        <div>
            <p>im the MAIN! </p>
            <Component />
        </div>
    );   
}
export default Main;