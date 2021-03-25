import React from 'react';
import {useContext} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import {Button} from '@material-ui/core';
import { Link, navigate } from '@reach/router';
import axios from 'axios'; 

const PirateBar = props => {
    const context = useContext(Wrapper)
    const{pirate, i } = props
    const deleteHandler =(e)=> {
        axios.delete("http://localhost:8000/api/pirates/delete/"+ pirate._id)
        .then(res=>{
            context.updateView === false ? context.setUpdateView(true) : context.setUpdateView(false)
        })
        .catch(err=>console.log(err))

    }
    return (
        <div style={{marginTop: 30, marginBottom: 30, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', background: 'white', margin: "0 auto", width: 500, border: "2px solid black"}}>
            <img style={{border: '2px solid black', width:100}}src = {pirate.url}></img>
            <div>
            <h1>{pirate.name}</h1>
            <Button style={{color: "white", fontWeight: 'bold', border: '2px solid black', marginRight: 20, background: 'blue'}} onClick={(e)=>{ navigate("/pirate/"+ pirate._id)}}variant='contained'>View Pirate</Button>
            <Button style={{color: "white", fontWeight: 'bold', border: '2px solid black', background: 'red'}} onClick = {deleteHandler} variant='contained'>Walk the Plank</Button>
            </div>
        </div>
    );   
}
export default PirateBar;