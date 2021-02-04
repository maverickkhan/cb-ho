import React from 'react'
import '../styles/PurchaseDetail.css';

import {Link} from 'react-router-dom'
import Navigation from './Navigation';
import paypal from '../assets/images/Powered-by-paypal/Powered-by-paypal.png'
import 'react-circular-progressbar/dist/styles.css';


import {} from '@fortawesome/react-fontawesome'
import  {Container,Row,Col,Form,Button} from '../../node_modules/react-bootstrap';

function PurchaseDetail() {
  
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
    
    <Form className='border'>

                       
                        <div className='purchase-LoginForm'>
<h3>  COBOLT</h3>
</div>



<div class='thankyou-content  mt-3'>
    <p>
    Purchase Details    </p>
    </div>

          
<br />

<div className='w-90 mx-auto'>

<Form.Group controlId="formGroupEmail" >
    {/* <Form.Label className='font-weight-light formLabel'>Username</Form.Label> */}
    <Form.Control type="email" placeholder="Description" className='purchase-input'/>
  </Form.Group>

  <div className='row purchase-input-row'>

<div className='col-8 purchase-input1 '>


<div class="input-group input-group-lg">
  
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">AED</span>
  </div>

</div>


</div>
<div className='col-4 purchase-input purchase-input2 '>
{/* <Form.Control type="email" placeholder="Description" className='purchase-input'/> */}
{/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" /> */}

<div class="input-group input-group-lg ">
  
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
</div>

</div>
  </div>

<br />
<br />
  <Button variant="primary"   block>
    Continue
  </Button>  
  
<br />

  <img className='mx-auto d-block' src={paypal} alt="" />
  <br/>
</div>
</Form>

<br />

<Row>
<Col xl={9} lg={9} md={9} sm={9} xs={12} >
    <Link to='' className='mr-3 mr-sm-1 mr-xs-1 ' >Policies</Link>
    <Link to='' className='mr-3 mr-sm-1 mr-xs-1' >Terms</Link>
    <Link to=''  className='mr-3 mr-sm-1 mr-xs-1'>Privacy</Link>
    <Link to=''className='mr-3 mr-sm-1 mr-xs-1' >Feedback</Link>
{/* // className='mr-3 mr-sm-1 mr-xs-0 text-secondary */}
</Col>

<Col xl={3} lg={3} md={3} sm={3} xs={12} >
    <p className='font-weight-light purchase-copyright'>@1999-2017</p>
</Col> 

</Row>


    </div>

    </Col>



</div>


            
        </div>
    )
}

export default PurchaseDetail
