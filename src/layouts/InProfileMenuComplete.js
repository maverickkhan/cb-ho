import React from 'react'
import InProfileFooter from '../partials/InProfileFooter';
import './InProfileMenuComplete.css'

export default function InProfileMenuComplete() {
    return (
        <div className="profile-inside-footer-menu-items">
            <nav className="profile-navigation-footer-inside">
                <ul className="profile-navigation-list-items-footer">
            <InProfileFooter title={{name:'Blog', link:'#'}}/>
            <InProfileFooter title={{name:'Pricing', link:'#'}}/>
            <InProfileFooter title={{name:'Careers', link:'#'}}/>
            <InProfileFooter title={{name:'Terms', link:'#'}}/>
            <InProfileFooter title={{name:'Privacy', link:'#'}}/>
            <InProfileFooter title={{name:'Status', link:'#'}}/>
            <InProfileFooter title={{name:'API Docs', link:'#'}}/>
            <InProfileFooter title={{name:'Tutorials', link:'#'}}/>
            <InProfileFooter title={{name:'Support', link:'#'}}/>
            <InProfileFooter title={{name:'Solution Partner Program', link:'#'}}/>
                </ul>
            </nav>
        </div>
    )
}
