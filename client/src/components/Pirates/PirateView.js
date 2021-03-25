import React from 'react';
import {useContext,useState} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import { Button } from '@material-ui/core';
import axios from 'axios';

const PirateView = props => {
    const context = useContext(Wrapper)
    const{pirate, setPirate} =  props
    const[editPirate,setEditPirate] =useState(pirate)
    const[changed, setChanged] = useState(false)

    return (
        <div style={{display: 'flex', width: 400, height: 400, margin: '0 auto'}}>
        <div style={{marginTop: 20}}>
            <img style={{border: '2px solid black', width: 200}}src = {pirate.url}></img>
            <div>
                <h2>"{pirate.phrase}"</h2>
            </div>
        </div>
        <div>
            <div style={{textAlign: 'left', paddingLeft: 30, marginTop: 20, border: '2px solid black', width: 200, height: 250, marginLeft: 20, background: 'white'}}>
                <h2>About</h2>
                <p>Position: {pirate.position} </p>
                <p>Treasures: {pirate.chests} </p>
                <p>Peg Leg: 
                    {  
                        editPirate.leg === true ? <span> Yes </span> : <span> No </span>   
                    } 
                </p>
                <p>Eye Patch: 
                {  
                        editPirate.eye === true ? <span> Yes </span> : <span> No </span>   
                }
                </p>
                <p>Hook Hand: 
                {  
                        editPirate.hook === true ? <span> Yes </span> : <span> No </span>   
                }
                </p>
            </div>
            </div>
           
        </div>
    );   
}
export default PirateView;