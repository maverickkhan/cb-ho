import React,{useState} from 'react'
// import { BiUser } from "react-icons/bi";
import {FaMobileAlt} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
// import './Auth2Factor.css';
import Navigation from './Navigation';
import SignIn from '../assets/images/Sign-In-Logo.png';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import '../styles/Auth2Factor.css'
import {} from '@fortawesome/react-fontawesome'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function Auth() {

    const [value, setValue] = useState()
//  const value=+971
    return (

        // <Navigation />
        <div className='container-fluid my-Container'>
        {/* <Navigation /> */}
        {/* main-2auth */}

<div className=' main-newSign'>


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

                        <div className="logo mb-4">
                            <img src={SignIn} alt="Cobolt-logo" width='35%' height='8%' />
                        </div>

                        <div className='LoginForm margin-3'>
<h3> <span className="user-logo"> < FaMobileAlt/> </span>  2-Factor Authentication</h3>
</div>
                        {/* width='150px' height='50px' */}

    
    

    <Form.Group controlId="formGroupEmail">
    <Form.Label className='font-weight-light formLabel mt-3'>What phone Number do you want to use</Form.Label>
    {/* <Form.Control type="email" placeholder="Name Here" /> */}
    <PhoneInput className="phone-input mt-2 "
      placeholder=" Name Here"
      // value={value}
      value={value}
      onChange={setValue}/>

    <Form.Label className='font-weight-light formLabel mt-3 mt-xl-5'>How do you want to get codes?</Form.Label>

    <div class="radio mt-1">
  <label><input type="radio" name="optradio"  /> 
  <span className='Auth-mail ml-2'><GrMail /><span className='Auth-mail-text ml-2'>Text Message</span></span>
  </label>
</div>


<Button variant="primary"  className="next-btn mt-3 mt-xl-4 " >
    NEXT
  </Button>

  </Form.Group>
 
    
    
      
   

  {/* <Row>
      <Col></Col>
      <Col className='mb-2'>
          <a href="#" className='font-weight-light formLabel  '>Forget Password ?</a>
      </Col>
  </Row> */}
  {/* mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5 */}

  
 
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
