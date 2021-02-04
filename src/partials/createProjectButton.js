import React from 'react';
import propTypes from 'prop-types';
import './createProjectButton.css';

export default function createProjectButton({item}) {
    return (<div>
        <button>{item}</button>
    </div>
    )
}
createProjectButton.defaultProps = {
    item: '1. Create Project',
}
