import React from 'react';
import './HelpLineIcon.css';
import customerIcon from '../assets/img/icons/customIcons/Customer-Icon.svg';
import notificationIcon from '../assets/img/icons/customIcons/Notification-Icon.svg';

export default function HelpLineIcon(icon) {
    return (
        <div className="headericonportal">
            <img src={customerIcon} alt='customerIcon' width='15%' height='15%' />
        </div>
    )
}