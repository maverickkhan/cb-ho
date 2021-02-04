import React from 'react'
// import { BiUser } from "react-icons/bi";
import {BiUser} from 'react-icons/bi';
import {Link} from 'react-router-dom'
import{AiOutlineGoogle} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import '../styles/SignUpEmail.css';
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

    {/* className="ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5"  */}
    {/* className="ml-sm-2 ml-md-2 ml-lg-2 ml-xl-2" */}
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

                        <div className='LoginForm'>
<h3> <span className="user-logo"> < BiUser/> </span>  Sign In</h3>
</div>
                        {/* width='150px' height='50px' */}
  <Row className='signup-input'>
    <Col >
    

    <Form.Group controlId="formGroupEmail">
    <Form.Label className='font-weight-light formLabel'>Username</Form.Label>
    <Form.Control type="email" placeholder="Name Here" />
  </Form.Group>
  </Col>
    
    <Col>
    <Form.Group controlId="formGroupPassword" >
    <Form.Label className='font-weight-light formLabel'>Email</Form.Label>
    <Form.Control type="password" placeholder="Enter your email address" />
  </Form.Group>
      
    </Col>

  </Row>

  
      <Col className='p-0'>
      <Form.Group controlId="formGroupPassword" >
    <Form.Label className='font-weight-light formLabel'>Password</Form.Label>
    <Form.Control type="password" placeholder="********" />
  </Form.Group>
      </Col>
      <br/>
  {/* mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5 */}

  {/* signUp-btn */}
  <div className='signup-btn'>
  <Button variant="primary" className='signup-btn1 signUp-btn ' block >
    SIGN IN
  </Button>
  </div>
<br /> <br />

  <Form.Label className='font-weight-light formLabel'>Already Have an account ? <Link to='' className="terms">Sign In</Link></Form.Label>
</Form>
    </div>

    </Col>
  </Row>
{/* // </Container> */}


</div>


            
        </div>
    )
}

export default Auth;
