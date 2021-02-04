import React from 'react'
import './SubHeadingTitle.css';

export default function SubHeadingTitle({title, details, displayClass}) {
    return (
        <div className="form-title-div">
            <h2 className="form-title-heading">{title}</h2>
            <p className={displayClass}>{details}</p>
        </div>
    )
}

SubHeadingTitle.defaultProps = {
    title: "Project Name",
    details: " ",
    displayClass: ".form-title-paragraph"
}