import React from 'react'
import '../styles/PaymentMethod.css';

import {Link} from 'react-router-dom'
import Navigation from './Navigation';
import feather from '../assets/images/feather-credit.svg'
import paypal from '../assets/images/paypal_PNG19/paypal_PNG19.png'
import 'react-circular-progressbar/dist/styles.css';

import payment from '../assets/images/payment-method-icon.svg'

import {} from '@fortawesome/react-fontawesome'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function Paymentmethod() {
  
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
                            <img src={payment} alt="Cobolt-logo" style={{width:"20%"}} />
                        </div>

                        <div className='thankyou-LoginForm'>
<h3>  Add a payment method to your account</h3>
</div>



<div class='thankyou-content  mt-3'>
    <p>
    We ask for your payment method to verify your identity and to keep spammers out.
    </p>
    </div>

          
<br />
  <Button block className='gotham-btn mt-5 pt-3 pb-3 payment-btn payment-btn1 mx-auto'  >
  <span><img src={feather} alt=''/>   </span>
  Credit Card
  </Button>  
  

  
  <Button  block className='gotham-btn pt-2 pb-2 payment-btn payment-btn2 mx-auto'  >
  <span><img src={paypal} alt=""/></span>
  
  </Button>  
 

</Form>
    </div>

    </Col>


</div>


            
        </div>
    )
}

export default Paymentmethod
