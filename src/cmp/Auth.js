import React from 'react'
// import { BiUser } from "react-icons/bi";
import {BiUser} from 'react-icons/bi'
import{AiOutlineGoogle} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import '../styles/Auth.css';
import Navigation from './Navigation';
import SignIn from '../assets/images/Sign-In-Logo.png';

import {} from '@fortawesome/react-fontawesome'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function Auth() {
    return (

        // <Navigation />
        <div className='container-fluid my-Container'>
        {/* <Navigation /> */}

<div className='main-sign '>


{/* <Container className="container-fluid"> */}
  
  <Row className='m-0'>
    <Col sm={4} lg={4} xl={4} className="leftContainer">

    <div className='mx-auto'>
                        <h3 className="text-center">Welcome to</h3>
                        <h1 className="text-center">cobolt</h1>
                    </div>
                    {/* className="align-item-center" */}

    </Col>

    
    <Col sm={6} lg={6} xl={6} className="border-box rightContainer mr-xl-5 mr-lg-5 mr-md-5">
<div className='container containerBox'>
    
    <Form>

                        <div className="logo">
                            <img src={SignIn} alt="Cobolt-logo" width='35%' height='8%' />
                        </div>
                        {/* auth-LoginForm */}
                        <div className='LoginForm'>
<h3> <span className="user-logo"> < BiUser/> </span>  Sign In</h3>
</div>
<br />

                        {/* width='150px' height='50px' */}
  <Row className='auth-input'>
    <Col >
    

    <Form.Group controlId="formGroupEmail">
    <Form.Label className='font-weight-light formLabel'>Username</Form.Label>
    <Form.Control type="email" placeholder="Name Here" />
  </Form.Group>
  </Col>
    
    <Col>
    <Form.Group controlId="formGroupPassword" >
    <Form.Label className='font-weight-light formLabel'>Password</Form.Label>
    <Form.Control type="password" placeholder="********" />
  </Form.Group>
      
    </Col>

  </Row>

  <Row>
      <Col></Col>
      <Col className='mb-2'>
          <a href="#" className='font-weight-light formLabel  '>Forgot Password?</a>
      </Col>
  </Row>
  {/* mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5 */}
{/* <div></div> */}
<br />
<br />


  <Button    block className='auth-btn mx-auto auth-btn1'>
    LOGIN
  </Button>
  <Button className='google-btn form-btn  auth-btn mx-auto'  block >
  <span><AiOutlineGoogle className='mb-1 mr-1'/></span>

    SIGN IN WITH GOOGLE
  </Button>
  <Button variant="secondary"  block className='auth-btn mx-auto'>
   <span ><AiOutlineGithub className='mb-1 mr-1'/></span>
    SIGN IN WITH GITHUB
  </Button>
</Form>
    </div>

    </Col>
  </Row>
{/* // </Container> */}


</div>


            
        </div>
    )
}

export default Auth
