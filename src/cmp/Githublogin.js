import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import Footerlinks from './Footerlinks';
import { FaGithub } from 'react-icons/fa';
import logo from './../assets/images/logo.png';
import 'tachyons';

class Githublogin extends Component{
    render(){
        return(
            <div className="git-mainpage cover">
                <div className="row">
                    <div className="col-md-8 offset-md-2 bg-light-gray br3 flex flex-wrap justify-center pa5">
                    <div className="box">
                    < FaGithub className="f2"/>
                        <div className="main-box bg-white-90 br2 ba b--black-20 mt4 pl4 pr4">
                            <img src={logo} alt="logo" className="mt4 bg-white-90" width="150" />
                            <div className="git-text black-60">
                                <span>Sign in to <b>GitHub</b></span><br />
                                <span>to continue to <b>DigitalOcean</b></span>
                            </div>
                            <hr className="mb4"/>
                            <form>
                                <div className="form-group mb1 tl b">
                                    <Form.Label htmlFor="username" className="black-50 f6">Username or email address</Form.Label>
                                    <Form.Control type="email" className="form-control form-control-lg" id="user" />
                                </div>
                                <span className="absolute fw5 ml4 f6">
                                    <Link to="/Forget">Forget Password?</Link></span>
                                <div className="form-group tl b">
                                    <Form.Label htmlFor="password" className="black-50 f6">Password</Form.Label>
                                    <Form.Control type="password" className="form-control form-control-lg" id="pass" />
                                </div>
                                <div className="form-group btn-block mt-4 mb-4">
                                    <Button type="button" variant="success" className="btn btn-success btn-lg btn-block login-btn-github br3 f6">Sign in</Button>
                                </div> 
                            </form>
                        </div>
                        <div className="git_signup">
                            <div className="account-git br2 ba b--black-20 mt3 pl4 pa3">
                                <span>New to GitHub? <Link to = "/Signup">Create an account.</Link></span>
                            </div>
                        </div>
                        <div className="git_footerlinks">
                            <Footerlinks/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Githublogin;