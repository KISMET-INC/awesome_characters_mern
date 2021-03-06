import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Signature from './buttons/Signature';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    fontSize: '22px',
    color: 'black',
  },
  label: {
    color:'black'
  },
  name :{
    fontSize: '15px'
  }
}));



const icon2 = {
  marginLeft:  '10px',
  textAlign: 'right',
}



export default function NameModal(props) {
  const [location] = useState(props.location)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  
  };
  
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div id = 'Modal'>
      {
      location !== 'dropdown' ? <button type="button" onClick={handleOpen}> Set Voter Name </button> : < div onClick={handleOpen}> <span className={classes.name}>Signature</span><i style={icon2} className="fas fa-signature"></i></div>
      }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={classes.title} id="transition-modal-title">Set Your Voter Name</h2>
            <p className={classes.label} id="transition-modal-description">Set your voter name, or stay anonymous</p>
            <Signature handleClose= { handleClose }/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}