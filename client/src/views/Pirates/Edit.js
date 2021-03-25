import React, { useEffect, useState } from 'react';
import {useContext} from 'react';
import Wrapper from '../../context/Context.js'
import '../App.css';
import Component from '../components/Component.js';
import PirateView from '../components/PirateView.js';
import axios from 'axios';

const Edit = props => {
    const context = useContext(Wrapper)
    const [pirate, setPirate] = useState({})
    const [updateView, setUpdateView] = useState(context) 
    const [loaded, setLoaded] = useState(false)
 
    useEffect(()=> {
        axios.get("http://localhost:8000/api/pirates/"+ props.id  )
        .then(res=>{
            setPirate(res.data.pirate);
            setLoaded(true)
        })
        .catch(err=>console.log(err))

    },[updateView])



    return (
        <div className="View">
            <div className="Title">
            <h1>{pirate.name}</h1>
            </div>
            {
             loaded &&  <PirateView setPirate = {setPirate} pirate={pirate} />
            }
        </div>
    );   
}
export default Edit;