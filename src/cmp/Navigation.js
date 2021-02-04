import React from 'react'
import './Navigation.css'
import {Navbar,Nav,Form,FormControl,Button} from '../../node_modules/react-bootstrap'
import SignIn from '../assets/images/Sign-In-Logo.png';
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    
      
      <>
  
  
      <Navbar className="myBg" expand="lg">
      {/* <img src={SignIn} alt=""/> */}
  <Navbar.Brand as ={Link} to='/' >
<img src={SignIn} alt="" className="logo-brand"/>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link as={Link} to='/' href="#home" className='text-light'>Home</Nav.Link>
      <Nav.Link as={Link} to='/auth2factor' className='text-light'>2-factor</Nav.Link>
      <Nav.Link as={Link} to='/signup' className='text-light'>SignUp</Nav.Link>
      <Nav.Link as={Link} to='/signupemail' className='text-light'>SignUpWithEmail</Nav.Link>
      <Nav.Link as={Link} to='savedacc' className='text-light'>saved Account</Nav.Link>
      <Nav.Link as={Link} to='/newlogin' className='text-light'>Verification</Nav.Link>
      <Nav.Link as={Link} to='/paymentmethod' className='text-light'>payment</Nav.Link>
      <Nav.Link as={Link} to='/purchasedetail' className='text-light'>purchase</Nav.Link>
      <Nav.Link as={Link} to='/forget' className='text-light'>forget</Nav.Link>
      <Nav.Link as={Link} to='/thankyou' className='text-light'>Thankyou</Nav.Link>
      <Nav.Link as={Link} to='/savedacc1' className='text-light'>Saved Acc 1</Nav.Link>
      <Nav.Link as={Link} to='/paypal' className='text-light'>Paypal</Nav.Link>
      <Nav.Link as={Link} to='/addcard' className='text-light'>Add card</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

  
  
</>
      )
}

export default Navigation

