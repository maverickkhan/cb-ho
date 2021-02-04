import React from 'react'
import '../styles/Forget.css';

import {Link} from 'react-router-dom'
import Navigation from './Navigation';

import 'react-circular-progressbar/dist/styles.css';
import {} from '@material-ui/core/Button';
import AdjustIcon from '@material-ui/icons/Adjust';
import forget from '../assets/images/Forgot-Password-icon.svg'

import {} from '@fortawesome/react-fontawesome'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function NewDeviceLogin() {
  
    const percentage = 18;
    return (

        // <Navigation />
        <div className='container-fluid my-Container'>
        {/* <Navigation /> */}

        {/* newLogin-main */}
<div className='main-big '>
<br></br>
<div className='mt-5'></div>

    <Col  className="border-box single-container forgot-cont">
<div className='container containerBox'>
    
    <Form>

        <div className="thankyou-logo img-responsive">
            <img src={forget} alt="Cobolt-logo" style={{width:"30%"}} />
        </div>

        <div className='thankyou-LoginForm'>
            <h3>   Forgot Password?</h3>
        </div>



<div class='thankyou-content  mt-3'>
    <p>
    Enter the email address associated with your account and we will send you a link to reset your password.  </p>
</div>

<div className='thankyou-form p-0 pl-2'>
    
<div className="container">
    <Form.Group controlId="formGroupEmail ">
    <Form.Control type="email" placeholder="Enter Email Address" className='thankyou-input' />
  </Form.Group>
  </div>
  </div>
  <Button variant="primary pt-3 pb-3" className='gotham-btn chota-karo'  block>
    REQUEST PASSWORD RESET
  </Button> 
<AdjustIcon className="material-class"/>

</Form>
    </div>

    </Col>


</div>


            
        </div>
    )
}

export default NewDeviceLogin

NewDeviceLogin.defaultProps = {

}