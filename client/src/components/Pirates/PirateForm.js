import React from 'react';
import {useContext, useState} from 'react';
import Wrapper from '../context/Context.js'
import '../App.css';
import { Button } from '@material-ui/core';

const PirateForm = props => {
    const context = useContext(Wrapper)
    const {submitHandler, errors} = props
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [chests, setChests] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("Captain");
    const [leg, setLeg] = useState(true);
    const [eye, setEye] = useState(true);
    const [hook, setHook] = useState(true);

    const errorStyle ={
        color: 'red',
        fontWeight: 'bold',
    }

    const positions = ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"]

    return (
        <form style={{width: 500, margin: "0 auto", textAlign: 'left'}} onSubmit={e=> {submitHandler( e, {name, url,chests,phrase,position,leg,eye,hook})}}>
    <div style={{ height: 300, marginTop: 30, marginBottom: 30, display: 'flex'}}>
        <div> 
             <div>
             <label htmlFor ="name"> Name </label>
             <input type ='text' name='name'  onChange={(e)=> {setName(e.target.value)}}></input>
             {
                errors.name =="" && name.length < 1 ? <p style={errorStyle}> Name is Required</p> :<p style={errorStyle}>{errors.name}</p>
             }
             </div>

            <div>
             <label htmlFor ="url"> Image Url </label>
             <input type ='text' name='url'  onChange={(e)=> {setUrl(e.target.value)}}></input>
             {
                errors.url =="" && url.length < 1 ? <p style={errorStyle}> Url is Required</p> :<p style={errorStyle}>{errors.url}</p>
             }
             </div>

            <div>
             <label htmlFor ="chest"> # of Treasure Chests:</label>
             <input value = {chests} type ='number' name='chest'  onChange={(e)=> {setChests(e.target.value)}}></input>
             {
                errors.chests =="" && chests < 0 ? <p style={errorStyle}>Number of Chests must be 0 or greater</p> :<p style={errorStyle}>{errors.chests}</p>
             }
            </div>

            <div>
             <label htmlFor ="phrase"> Pirate Catch Phrase </label>
             <input type ='text' name='phrase'  onChange={(e)=> {setPhrase(e.target.value)}}></input>
             {
                errors.phrase =="" && phrase.length < 1 ? <p style={errorStyle}> Catch Phrase is required </p> :<p style={errorStyle}>{errors.phrase}</p>
             }
            </div>
</div>
<div>
            <div>
             <label htmlFor ="position"> Crew Position</label>
             <select style={{marginBottom: 20}} name="position" value={position} onChange={(e) => setPosition(e.target.value)}>
                 {
                 positions.map((position, idx) => 
                 <option key={idx} value={position}>{position}</option>
                 )}
            </select>
            </div>
            <div>
                <label>
                    <input  name= "leg" type="checkbox" checked={leg} onChange={e => setLeg(e.target.checked)}/> Peg Leg
                </label>
            </div>

            <div>
                <label>
                    <input name= "eye"  type="checkbox" checked={eye} onChange={e => setEye(e.target.checked)}/> Eye Patch
                </label>
            </div>

            <div>
                <label>
                    <input name= "hook"  type="checkbox" checked={hook} onChange={e => setHook(e.target.checked)}/> Hook Hand
                </label>
            </div>


             <Button style={{border: '2px solid black', background:'blue', color:'white', fontWeight:"bold", marginTop: 20}} type='submit' variant='contained'>Add Pirate</Button>
</div>
        </div>
        </form>

    );   
}
export default PirateForm;