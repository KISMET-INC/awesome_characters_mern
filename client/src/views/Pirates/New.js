import React from 'react';
import {useContext, useState} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import PirateForm from '../components/PirateForm.js';
import { Button } from '@material-ui/core';
import { navigate } from '@reach/router';
import axios from 'axios';


const New = props => {
    const context = useContext(Wrapper)

    const [empty] = useState({
        name: "",
        url: "",
        chests: "",
        phrase: "",
        position: "",
        unique: "",
    })
    
    const [errors, setErrors] = useState(empty)
    
         const submitHandler = (e, data) => {
            e.preventDefault();
    
            axios.post("http://localhost:8000/api/pirates/new", data)
            .then(res=>{
                // Errors exist
                console.log(res.data)
                if(res.data.error !== undefined){
                    if(res.data.error.errors !== undefined){
                    console.log("ERRORS FOUND")
    
                    let err = res.data.error.errors;
                    let url = err.url !== undefined ? err.url.message: "";
                    let name = err.name !== undefined ? err.name.message: "";
                    let chests = err.chests !== undefined ? err.chests.message: "";
                    let phrase = err.phrase !== undefined ? err.phrase.message: "";
                    let position = err.position !== undefined ? err.position.message: "";

                    setErrors({
                        name: name,
                        url: url,
                        chests: chests,
                        phrase: phrase,
                        position: position,
                        unique:"",
                    })
    
                } else if(res.data.error === "Pirate Exists"){
                    setErrors({unique: "This Pirate exists"})
    
                }
            // No errors exist
            } else {
                    console.log("NO EERORS")
                    setErrors({...empty});

                    navigate("/pirate/"+ res.data.pirate._id)
                    //props.updateView === false ? props.setUpdateView(true) : props.setUpdateView(false)
            }})
            .catch(err=>console.log(err))
    
        }
    

    return (
        <div className="View">
            <div className="Title">
            <h2 >PIRATE CREW</h2>
            <Button style={{color: 'white', border:'2px solid black', background:'blue', fontWeight: 'bold'}} onClick = {(e)=> {navigate('/pirates')}} variant='contained'>Crew Board</Button>
            </div>
            <PirateForm submitHandler={submitHandler} errors={errors}/>
        </div>
    );   
}
export default New;