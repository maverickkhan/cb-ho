import React from 'react'
import '../styles/Auth.css'
import SignIn from '../assets/images/Sign-In-Logo.png';
import { Col, Row,Form,FormGroup,Label,Input } from 'reactstrap'
import { FiCreditCard } from 'react-icons/fi'
import Feather from '../assets/images/feather-info.svg'
import { makeStyles } from '@material-ui/core/styles';
import {Button} from 'react-bootstrap'
// import Input from '@material-ui/core/Input';
import {GiCancel} from 'react-icons/gi'




import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Navigation from './Navigation'

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

              <GiCancel className='addCard-cancel'/>

              <img src={SignIn} alt="Cobolt-logo" width='30%' height='8%' />
            </div>
            {/* LoginForm */}
            <div >
              <h3 className='addCard-heading'> <span className="user-logo"> < FiCreditCard /> </span>Add Card</h3>
            </div>
            <div  style={{position:'relative'}}>
            
            {/* className='addCard-tooltip p-2 ' */}
          <div className='addCard-tooltip p-2 '>
          <h5 className='addCard-tooltip-h'>we won't charge your card</h5>
          <p >
You may see a temporary pre-authentication charge to verify the card, which will be reversed within a week. This prepayment will apply to any future bills          </p>
</div>
      </div>




            <div className='col-8 addCard-p' >
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <div style={{ position: 'absolute', top: 35, right: 20 }}>
                <FiCreditCard className='mr-2' />
                <img src={Feather} alt='' style={{ height: '20px' }} />
              </div>
            </div>
            <br />

            <div className='col-4'></div>

          




          <div className='col-8 addCard-p'>
            {/* <Row>
              <Col>
              <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      </Form>
              </Col>

              <Col>
                <label for="exampleInputEmail1">Email address</label>

                <input type="email" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

              </Col>

              <Col>
                <label for="exampleInputEmail1">Email address</label>

                <input type="email" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

              </Col>
            </Row> */}

            <Form>
      <Row form >
        <Col md={4}>
          <FormGroup className='addCard-p'>
            <Label for="exampleEmail">Name on Card</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Name Here" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className='addCard-p'>
            <Label for="examplePassword">Expiry Date</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="MM/YY" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className='addCard-p'>
            <Label for="examplePassword">CVV Code</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>

        </Col>
      </Row></Form>
          </div>

          <div className='col-4'></div>

          <h3 className='addCard-heading1'>Billing Address</h3>
{/* <p>Please provide the billing address associated with credit card you've provided above.</p> */}


<div class='addcard-text pl-2 align-left' >
<p>Please provide the billing address associated with credit card you've provided above.</p>
</div>



<Row className='addCard-p'>
  <Col className='col-xl-4'>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select Country</label>
    <select class="form-control" id="exampleFormControlSelect1"  >
      <option>United States</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </Col>
  <Col className='col-xl-4'>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Street Address</label>
    <select class="form-control" id="exampleFormControlSelect1" >
      <option>Start typing</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </Col>
  
</Row>

<div >
{/* <Button variant="primary mt-5 pt-1 pb-1" className='gotham-btn'  block>
SAVE PAYMENT METHOD  </Button>   */}
<button className='addCard-btn p-2'>
  SAVE PAYMENT METHOD
</button>
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