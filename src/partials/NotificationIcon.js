import React from 'react';
import './HelpLineIcon.css';
import customerIcon from '../assets/img/icons/customIcons/Customer-Icon.svg';
import notificationIcon from '../assets/img/icons/customIcons/Notification-Icon.svg';

export default function NotificationIcon() {
    return (
        <div className="headericonportal">
            <img src={notificationIcon} alt='customerIcon' width='15%' height='15%' />
        </div>
    )
}