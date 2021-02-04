import React from 'react'
// import { BiUser } from "react-icons/bi";
import {BiUser} from 'react-icons/bi'
import SavedAcc from '../assets/images/Saved-acc-icon.svg'
import '../styles/SavedAcc.css';
import Navigation from './Navigation';
import SignIn from '../assets/images/Sign-In-Logo.png';
import {Link} from 'react-router-dom'
import {} from '@fortawesome/react-fontawesome'
import {GiCircleCage} from 'react-icons/gi'
import {TiDeleteOutline} from 'react-icons/ti'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function SavedAccount() {
    return (

        // <Navigation />
        <div className='container-fluid my-Container'>
        {/* <Navigation /> */}

        {/* savedAcc-main */}

<div className='main-newSign'>


  
  <Row className='m-0 saved-container'>


    <Col  className="leftContainer saved-left">


    <div className='mx-auto'>
                        <h3 className="text-center">Welcome to</h3>
                        <h1 className="text-center">cobolt</h1>
                    </div>

    </Col>


    <Col  className="border-box rightContainer mr-0 ml-0 saved-right">
<div className='container containerBox'>
    
    <Form>

                        <div className="form-logo">
                            <img src={SignIn} alt="Cobolt-logo" width='35%' height='8%' />
                        </div>

                        <div className='LoginForm'>
<h3> <span className="user-logo"> < BiUser/> </span>  Sign Into your Account</h3>
</div>
                      
                      <div class="d-flex bd-highlight savedAcc-mail">
  <div class="p-2  bd-highlight ">
  <Form.Group controlId="formGroupEmail">
    
    <img src={SavedAcc} alt='' width='50%' className='mx-auto' />

    </Form.Group>
  </div>
  {/* class="p-2  bd-highlight" */}
  
  <div class="p-2 pl-2 w-100 bd-highlight">
  <Form.Group controlId="formGroupEmail">
  <Form.Control type="email" placeholder="chughtaimubeen5@gmail.com" aria-label='Large' className='thankyou-input gotham' />
  </Form.Group>
  

  <div className='savedAcc-cross'>
  {/* className="ma3 pt2" */}
  <span  > < TiDeleteOutline className="f2 dark-red fw1"/> </span>
</div>
  </div>

  
</div>


{/* 
                                <Form.Group controlId="formGroupEmail">
    <span className="ml2 mt1 mr3"> < GiCircleCage className="f1"/> </span>
  
    <Form.Control type="email" placeholder="Enter Code" className='thankyou-input' />
    <span  className="ma3 pt2"> < TiDeleteOutline className="f2 dark-red fw1"/> </span>

  </Form.Group> */}

    <Col className='savedAcc-' >
    

    
  </Col>
    



 
<Row>
  <Col className='savedAcc-pass'>
    <Form.Group controlId="formGroupPassword" className='savedAcc-input' >
    <Form.Label className='font-weight-light formLabel'>Password</Form.Label>
    <Form.Control type="password" className='font-weight-light savedAcc-input gotham' placeholder="Enter your password" />
  </Form.Group>
      
    </Col>

{/* <Col></Col> */}
</Row>
<Col className='mb-2 p-0'>
          <a href="#" className='font-weight-light formLabel forget '>Forget Password?</a>
      </Col>

<br></br>  

  <Button className='signUp-btn btn-height' >
    LOGIN
  </Button>
  
  <br />
  <br />

  <Form.Label className='font-weight-light formLabel'>Not you?</Form.Label>
  <br />

  <Form.Label className='font-weight-light formLabel '> <Link to='' className="terms">Sign In</Link> With a different account</Form.Label>



</Form>
    </div>

    </Col>
  </Row>
{/* // </Container> */}


</div>


            
        </div>
    )
}

export default SavedAccount
