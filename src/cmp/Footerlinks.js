import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Footerinks extends Component{
  
    render() {
        return (
            <nav className="mt4 pt4">
            <ul className="pa0 inline-flex" >
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/Signup">Privacy</Link>
              </li>
              <li>
                <Link to="/SignUpEmail">Security</Link>
              </li>
              <li>
                Contact GitHub 
              </li>
              
            </ul>
          </nav>
        )
    }
}

export default Footerinks;