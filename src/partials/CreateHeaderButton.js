import React from 'react';
import './CreateHeaderButton.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from "@material-ui/core/Button";

export default function CreateHeaderButton() {
    return (
        <div>
            <Button className="header-create-arrow-button" variant="contained" color="primary">
            Create <KeyboardArrowDownIcon/>
            </Button>
        </div>
    )
}
