import React from 'react'
// import '../styles/Check.css'
import { FaGithub, FaGoogle, FaUserAlt } from 'react-icons/fa';
import { BiUser } from "react-icons/bi";
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SignIn from '../assets/images/Sign-In-Logo.png';

function Check() {

    return (
        <div className="jumbotran image" >
            {/* <img src='../assets/images/SignIn.png' alt='' /> */}
            <div class="container-fluid ">
                <div class="row">

                    <div className="col-sm-3 col-lg-3 col-xl-3">
                        {/* <div className="heading">
                        <p>Welcome to</p>
                        <h1>Cobolt</h1>
                    </div> */}
                    </div>

                    <div className='col-sm-6 col-lg-6 col-xl-6 main-page'>

                        <div className="myCon">
                            <div className="logo">
                                <img src={SignIn} alt="Cobolt-logo" width='200px' height='70px' />
                            </div>
                           

                           <div>

                           <form className='container'>
  <div class="form-row ">
  {/* <h3> <span> < BiUser /> </span> {this.props.name}</h3> */}
    <div class="form-group col-lg-4 col-md-8 col-sm-8">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
     
    </div>
    <div class="form-group col-lg-4 col-md-4 col-sm-8">
    <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    
  </div>
  {/* <br /> */}
  
  </div>
  <button type="submit" class="btn btn-primary ">Sign in</button>
</form>


                               
                           </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Check
