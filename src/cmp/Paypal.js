import React from 'react'
import '../styles/Auth.css'
import SignIn from '../assets/images/Sign-In-Logo.png';
import { Col, Row,Form,FormGroup,Label,Input } from 'reactstrap'
import { FiCreditCard } from 'react-icons/fi'
import Feather from '../assets/images/feather-info.svg'
import { makeStyles } from '@material-ui/core/styles';
import {Button} from 'react-bootstrap'
// import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Navigation from './Navigation'
import paypal from '../assets/images/paypal_PNG19/paypal_PNG19.png' 
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function AddCard() {

  const classes = useStyles();
  return (
    <div className='container-fluid my-Container'>
      {/* <Navigation /> */}

      <div className='main-sign '>
        <br />
        {/* className='container ' */}
        <div className='margin-container addcard-main' style={{ backgroundColor: 'white' }}>
          {/* className='container' */}
          <div className='margin-container'>

            <div className="logo">
              <br />
              <img src={SignIn} alt="Cobolt-logo" width='15%' height='auto' />
            </div>
            {/* LoginForm */}
            <div >
<img src={paypal} alt=""/>            </div>

<br/>

<div class='addcard-text  align-left addCard-effect' >
<p>
To confirm your PayPal account, you need to make small pre-payment.</p>
</div>

<Row className='addCard-p'>
<Col>
<div class="form-group">
    <label for="exampleFormControlSelect1">Select Country</label>
    <select class="form-control" id="exampleFormControlSelect1"  >
      <option>$ 5:00</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </Col>
  <Col>
  <div style={{position:"absolute",top:"30px",display:'flex'}} >
      <img src={Feather} alt=""/>
      <div className='paypal-tooltip p-2 ' >
          <p>This will get you one month with our $5 Atom.</p>
      </div>
      </div>
  </Col>
  </Row>

<div >
{/* <Button variant="primary mt-5 pt-1 pb-1" className='gotham-btn'  block>
SAVE PAYMENT METHOD  </Button>   */}
<button className='addCard-btn ml-0 p-3 '>
  CONTINUE TO PAYPAL
</button>
  </div>
<br/>

<div className='addcard-text mt-5'>
<p>It may take a few minutes to process your payment with PayPal</p>
</div>
<br/>
</div>

        </div>





      </div>

    </div>
    //  </div>

    // </div>
  )
}

export default AddCard;