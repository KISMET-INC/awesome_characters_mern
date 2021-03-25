import React from 'react';
import {useContext ,useState} from 'react';
import Wrapper from '../Context/Context.js'
import '../App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';

const DeleteBTN = props => {
    const context = useContext(Wrapper);
    const [modalIsOpen,setIsOpen] = useState(false);

    const deleteHandler=() => {
        axios.delete("http://localhost:8000/api/players/delete/" + props.id )
        .then(res=>{
            context.updateView === false ? context.setUpdateView(true) : context.setUpdateView(false)
            console.log(res)
        }).catch(err=>console.log(err))
    }


    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    const customStyles = {
        content : {
            top: '30%',
            left: '40%',
            right: 'auto',
            bottom: 'auto',
        }
    };

    return (
        <div>
            <button onClick ={openModal}> Delete </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
    
            <p style={{color: 'red'}}>Are you sure you wan to delete:</p>
            <h2 style={{marginBottom: 20}}> {props.name} </h2>
            <Button color="danger" variant = "contained" onClick={deleteHandler}>Yes</Button>
            <Button style={{background:'green', color: 'white'}} variant = "contained" onClick={closeModal}>No</Button>

        </Modal>
        </div>
    );   
}
export default DeleteBTN;