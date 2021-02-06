import React from 'react';
import propTypes from 'prop-types';
import './HeadingBigNarrow.css'

export default function HeadingBigNarrow({title}) {
    return (
        <div className='narrowHeading'>
            <h1>{title}</h1>
        </div>
    )
}

HeadingBigNarrow.defaultProps = {
    title: 'Create New Project',
}
