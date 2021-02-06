import React from 'react';
import './InProfileFooter.css';
import { BottomNavigation, colors } from '@material-ui/core';
import {Navbar,Nav,Form,FormControl,Button} from '../../node_modules/react-bootstrap'
import SignIn from '../assets/images/Sign-In-Logo.png';
import {Link} from 'react-router-dom'

export default function InProfileFooter({title}) {
    return (
                <ul>
                    <li className="profile-footer-nav-menu">
                        <a style={{color: "grey", textDecoration: '#58595B'}} href={title.link}>{title.name}</a>
                    </li>
                </ul>
    )
}
InProfileFooter.defaultProps = {
    title : {
        link: '#',
        name: 'Blog'
    }
}

