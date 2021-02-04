import React from 'react';
import { useState } from 'react';
import './profileDetails.css';
//import from '../assets/images/'
import PropTypes from 'prop-types';
import profilePicture from '../assets/images/profile/pfp.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
//import { propTypes } from 'react-bootstrap/esm/Image';

export default function ProfileDetails({profile}) {
    return (
        <div className='profile-box' >
            <div className='profile-image'><img src={profilePicture}/></div>
            <div className='profile-details'>
                <h3>{profile.name}</h3>
                <p>{profile.email}</p>
             </div>
             <div className='profile-icon'>
             <KeyboardArrowDownIcon />
             </div>
        </div>
    )
}

ProfileDetails.defaultProps = {
    profile : {
        name: 'Michael Smith',
        email: 'Smith@gmail.com',
    }
}
