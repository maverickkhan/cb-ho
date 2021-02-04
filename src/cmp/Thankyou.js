import React from 'react'
import '../styles/Thankyou.css';

import {Link} from 'react-router-dom'
import Navigation from './Navigation';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import thankyou from '../assets/images/thankyou-signIn.svg'

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

    <Col  className="border-box single-container ">
<div className='container containerBox'>
    
    <Form>

                        <div className="thankyou-logo img-responsive">
                            <img src={thankyou} alt="Cobolt-logo" style={{width:"20%"}} />
                        </div>

                        <div className='thankyou-LoginForm'>
<h3>   Thank you for Signing up</h3>
</div>



<div class='thankyou-content  mt-3'>
    <p>
    Please click the link in the email we just sent to    </p>
</div>

{/* <br></br> */}

<Link to='/'><h5 className="thankyou-help text-center mb-5">info@youremail.com</h5>  </Link>
          
<br />
  <Button variant="primary mt-5 pt-3 pb-3"   block>
    RESEND VERIFICATION MAIL
  </Button>  
  

  

 

</Form>
    </div>

    </Col>


</div>


            
        </div>
    )
}

export default NewDeviceLogin
