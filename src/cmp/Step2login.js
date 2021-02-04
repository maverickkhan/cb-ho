import React, { Component } from 'react';
import { FaGithub, FaGoogle, FaUserAlt } from 'react-icons/fa';
import { BiUser } from "react-icons/bi";
import SignIn from '../assets/images/Sign-In-Logo.png';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti";
import { GiCircleCage } from "react-icons/gi";
import 'tachyons';
class Step2login extends Component{
    render() {
        return (
            <div className="main-step"> 
                <div className="container-box flex-ns flex-wrap-ns tl items-center-ns justify-around flex-row-ns">
                    <div className="box2 pa3">
                        <h3>Welcome Back to</h3>
                        <h1>cobolt</h1>
                    </div>
                    <div className="box3">
                        <div className="logo">
                            <img src={SignIn} alt="Cobolt-logo" width='150px' height='50px' />
                        </div>
                        <div className="LoginForm">
                            <h3> <span> < BiUser/> </span> { this.props.name }</h3>
                            <form>
                                <div className="col-md-10 col-sm-12 col-xs-12 flex">
                                    <div className="form-group flex bg-white pa3 br3 shadow-2">
                                        <span className="ml2 mt1 mr3"> < GiCircleCage className="f1"/> </span>
                                        <Form.Control type="email" className="form-control form-control-lg bg-white"  id="user" value="C*******LT1@Gmail.Com" disabled />
                                    </div> 
                                    <span  className="ma3 pt2"> < TiDeleteOutline className="f2 dark-red fw1"/> </span>
                                </div>
                                <div className="fields ">
                                    <div className="field-box">
                                        <div className="form-group  signin-form-pass">
                                            <Form.Label htmlFor="password">Password</Form.Label>
                                            <Form.Control type="password" className="form-control form-control-lg" id="pass" placeholder="Create a password" />
                                        </div>
                                        <div className="tl f6"><Link to="/Forget">Forget Password?</Link></div>
                                    </div>
                                    <div className="field-box"></div>
                                </div>
                                <div className="form-group form-group btn-block mt-4 mb-4 pl-1 col-md-8 col-sm-12 col-xs-12">
                                    <Button type="button" variant="primary" className="btn btn-primary btn-lg btn-block login-btn">Sign Up</Button>
                                </div>
                            </form>
                        </div>
                        <div className="account-sign f6 tl black-70 fw3 mb3 pl3 ">
                            <span>By signing up you agree to the </span>
                            <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Policy</Link>
                        </div>
                        <div className="account-sign-in mb4 tl pa0 pl3">
                            <span>Not you?</span><br />
                            <Link to="/Auth">Sign in</Link><small> With a different account</small>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Step2login;