import React, { useEffect, useState } from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import axios from 'axios';
import PirateList from '../components/PirateList.js';
import { Button } from '@material-ui/core';
import { Link, navigate } from '@reach/router';

const Pirates = props => {
    const context = useContext(Wrapper)

    return (
        <div className="View">
            <div className="Title">
            <h2 >PIRATE CREW</h2>
            <Button style={{color: 'white', fontWeight: 'bold', border: '2px solid black', marginRight: 20, background: 'blue'}} onClick={(e)=> {navigate('/pirate/new')}} variant='contained'>Add Pirate</Button>
            </div>
            <PirateList /> 
        </div>
    );   
}
export default Pirates;