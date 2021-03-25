import React from 'react';
import {useContext, useState, useEffect} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import axios from 'axios';
import PirateBar from './PirateBar.js';


const PirateList = props => {
    const context = useContext(Wrapper)

    const [pirateList, setPirateList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/pirates" )
        .then(res=>{
            setPirateList(res.data.pirates)
        })
        .catch(err=>console.log(err))
    },[context.updateView])

    return (
        <div style={{overflow :'auto', height: 400}}>
            {
                pirateList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1).map((pirate,i)=>
                    <PirateBar pirate={pirate} key ={i} i={i} />
                )
            }
        </div>
    );   
}
export default PirateList;