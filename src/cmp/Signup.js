import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { BiUser } from "react-icons/bi";
import {GrMail} from 'react-icons/gr'
import '../styles/SignUp.css';
import{AiOutlineGoogle} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import Navigation from './Navigation';
import SignIn from '../assets/images/Sign-In-Logo.png';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


import {} from '@fortawesome/react-fontawesome'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function Auth() {


    const [value, setValue] = useState()
 
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

                        <div className='LoginForm'>
<h3> <span className="user-logo"> < BiUser/> </span>  Create Your Account</h3>
</div>
                        {/* width='150px' height='50px' */}

    {/* <br/> */}
    

    <Form.Group controlId="formGroupEmail">
    <Form.Label className='font-weight-light formLabel'>And start spending more time on your projects
     and less time managing your infrastructure</Form.Label>


<div className='signup-btn' >
  <Button className='signup-btn1'  block >
  <span ><GrMail className='mb-1 mr-1'/></span>
    SIGN UP WITH EMAIL
  </Button>
  <Button className='google-btn form-btn '  block>
  <span><AiOutlineGoogle className='mb-1 mr-1'/></span>

    SIGN IN WITH GOOGLE
  </Button>
  <Button variant="secondary" block  >
   <span ><AiOutlineGithub className='mb-1 mr-1'/></span>
    SIGN IN WITH GITHUB
  </Button>
  </div>
<br></br>
  <Form.Label className='font-weight-light formLabel'>By signing up you agree to the</Form.Label>
  <Form.Label className='font-weight-light formLabel'><Link to='' className='terms'>Terms of Services</Link> and <Link to='' className='terms'>Privacy Policy</Link></Form.Label>

  </Form.Group>
 
    
    
      
   

  
 
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
