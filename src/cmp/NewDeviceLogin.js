import React from 'react'
import '../styles/NewDeviceLogin.css';

import {Link} from 'react-router-dom'
import Navigation from './Navigation';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Verify from '../assets/images/verify-its-you.svg'

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
{/* <Container className="container-fluid"> */}
  
  {/* <Row className='m-0'> */}
    

  {/* sm={6} lg={6} xl={6} */}
    <Col  className="border-box single-container ">
<div className='container-fluid containerBox'>
    
    <Form>

                        <div className="thankyou-logo">
                            <img src={Verify} alt="Cobolt-logo" style={{width:"20%"}}/>
                        </div>

                        <div className='thankyou-LoginForm'>
<h3>   Verify it's You</h3>
</div>



<div class='thankyou-content pl-2'>
    <p>
        We sent a verification code to your email. Enter the code from the email in the field below
    </p>
</div>
                        {/* width='150px' height='50px' */}
  
    <Col className='thankyou-form p-0 pl-2'>
    

    <Form.Group controlId="formGroupEmail ">
    <Form.Label className='font-weight-light formLabel '>6 digit code</Form.Label>
    <Form.Control type="email" placeholder="Enter Code" className='thankyou-input' />
  </Form.Group>
  </Col>
    
    


<Row>
    <div className="col-9"> 
    <Button className=' form-btn thankyou-btn'  block >
    RESEND VERIFICATION EMAIL
    </Button> 
     </div>


     <div className='col-3'>
    
 <div className='progressBar'>
 <CircularProgressbar value={percentage} text={`${percentage}`+`\n`+'sec'} />;

 </div>
     </div>


</Row>  
  


<Link to='/'><h5 className="thankyou-help text-center ">Need Help?</h5>  </Link>
  
  <br></br>

  <div class='thankyou-content'>
    <p>
        Check Out our <Link to=''>Trouble shooting guide</Link> or <Link to=''>try again</Link>
    </p>
</div>

</Form>
    </div>

    </Col>


</div>


            
        </div>
    )
}

export default NewDeviceLogin
